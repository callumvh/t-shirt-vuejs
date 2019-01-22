<template>
  <div id="app">
    <!-- <input &#x3C;> -->
    <input @click="trueOrFalse_coffee=false" type="button" value="hide coffee">
    <input @click="swapShirts()" type="button" value="front to back">

    <v-stage
      ref="stage"
      :config="stageSize"
      @mousedown="handleStageMouseDown"
      @touchstart="handleStageTouchStart"
    >
      <v-layer ref="layer">
        <v-image
          :listening="false"
          :preventDefault="true"
          :config="{image: shirt_image,name:'shirt',visible:shirt_image_bool}"
          :draggable="false"
        />
        <v-image
          :listening="false"
          :preventDefault="false"
          :config="{image: back_of_shirt,name:'back_of_shirt', visible:back_of_shirt_bool}"
          :draggable="false"
        />
        <v-image :scale="{x:0.8,y:0.8}" :config="{image:eggs_image,name:'eggs'}" :draggable="true"></v-image>
        <v-image
          :scale="{x:0.1,y:0.1}"
          :config="{image:coffee_image,name:'coffee',visible:trueOrFalse_coffee }"
          :draggable="true"
        ></v-image>
        <v-rect :visible="false" v-for="item in rectangles" :key="item.id" :config="item"/>
        <v-transformer
          :anchorSize="20"
          :anchorFill="'white'"
          :anchorStroke="'purple'"
          :rotationSnaps="[0,45,90,135,180,225,270,315]"
          :enabledAnchors=" ['top-left', 'top-right', 'bottom-left', 'bottom-right']"
          ref="transformer"
        />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
import white_shirt_url from "../assets/new_front.png";
import back_of_shirt_url from "../assets/new_back.png";
const width = window.innerWidth;
const height = window.innerHeight;

export default {
  created() {
    let Eggs = new window.Image();

    Eggs.src =
      "https://www.cronj.com/blog/wp-content/uploads/2015/12/HTTPS-Secure-Padlock.png";
    Eggs.onload = () => {
      // image_eggs.name = "eggs";

      this.eggs_image = Eggs;
    };
    const coffee = new window.Image();

    coffee.src =
      "https://www.pngpix.com/wp-content/uploads/2016/10/Coffee-Beans-PNG-Transparent-Image.png";
    coffee.onload = () => {
      // image_eggs.name = "eggs";
      this.coffee_image = coffee;
    };

    window.addEventListener("resize", this.handleWindowResize);
    this.handleWindowResize();
  },

  data() {
    return {
      trueOrFalse_coffee: true,
      window: {
        width: 0,
        height: 0
      },
      stageSize: {
        width: width - 10,
        height: height
      },
      // image: null,
      shirt_image: null,
      back_of_shirt: null,
      // images: [],
      eggs_image: null,
      coffee_image: null,
      shirt_image_bool: true,
      back_of_shirt_bool: false,
      rectangles: [
        {
          x: 150,
          y: 150,
          width: 100,
          height: 100,
          fill: "red",
          name: "rect1",
          draggable: true,
          visible: false
        },
        {
          x: 150,
          y: 150,
          width: 100,
          height: 100,
          fill: "green",
          name: "rect2",
          draggable: false
        }
      ],
      selectedShapeName: "",
      selectedImgName: "yod",
      counter: 0
    };
  },

  methods: {
    swapShirts() {
      console.log(this.shirt_image_bool);
      if (this.shirt_image_bool == true) {
        this.shirt_image_bool = false;
        this.back_of_shirt_bool = true;
      } else {
        this.shirt_image_bool = true;
        this.back_of_shirt_bool = false;
      }
    },
    handleWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const image = new window.Image();
      this.stageSize.width = width - 10;
      this.stageSize.height = height;
      image.src = white_shirt_url;
      image.onload = () => {
        this.shirt_image = image;

        let multiplyerscaleX = width / image.width;
        let multiplyerscaleY = height / image.height;

        if (multiplyerscaleX > multiplyerscaleY) {
          image.width = multiplyerscaleY * image.width - 10;
          image.height = multiplyerscaleY * image.height;
        }
        if (multiplyerscaleX < multiplyerscaleY) {
          image.width = multiplyerscaleX * image.width - 10;
          image.height = multiplyerscaleX * image.height;
        }
      };
      const back_of_shirt = new window.Image();
      back_of_shirt.src = back_of_shirt_url;
      back_of_shirt.onload = () => {
        this.back_of_shirt = back_of_shirt;
        let multiplyerscaleX = width / back_of_shirt.width;
        let multiplyerscaleY = height / back_of_shirt.height;

        if (multiplyerscaleX > multiplyerscaleY) {
          back_of_shirt.width = multiplyerscaleY * back_of_shirt.width - 10;
          back_of_shirt.height = multiplyerscaleY * back_of_shirt.height;
        }
        if (multiplyerscaleX < multiplyerscaleY) {
          back_of_shirt.width = multiplyerscaleX * back_of_shirt.width - 10;
          back_of_shirt.height = multiplyerscaleX * back_of_shirt.height;
        }
      };
    },
    handleStageMouseDown(e) {
      // clicked on stage - cler selection
      if (e.target === e.target.getStage()) {
        this.selectedShapeName = "";
        this.selectedImgName = "";
        this.updateTransformer();
        return;
      }

      // clicked on transformer - do nothing
      const clickedOnTransformer =
        e.target.getParent().className === "Transformer";
      if (clickedOnTransformer) {
        return;
      }
      const name = e.target.name();
      // console.log(name);
      // find clicked rect by its name
      // if (name !== "shirt") {
      const rect = e.target;
      // }
      // if (name === "coffee") {
      //   const rect = e.target;
      // }

      // const rect = this.rectangles.find(s => s.name === name);

      // const img = this.image.find(r => r.name === name);
      // console.log(name);
      // console.log(e.target.index);

      if (rect) {
        this.selectedShapeName = name;
      } else {
        this.selectedShapeName = "";
      }
      this.updateTransformer();
    },
    handleStageTouchStart(e) {
      // pressed on stage - cler selection
      if (e.target === e.target.getStage()) {
        this.selectedShapeName = "";
        this.updateTransformer();
        return;
      }

      // pressed on transformer - do nothing
      const pressedOnTransformer =
        e.target.getParent().className === "Transformer";
      if (pressedOnTransformer) {
        return;
      }

      // find pressed rect by its name
      const name = e.target.name();

      // const rect = this.rectangles.find(r => r.name === name);
      const rect = e.target;
      // const img = this.images.find(r => r.name === name);

      if (rect) {
        this.selectedShapeName = name;
      } else {
        this.selectedShapeName = "";
      }
      this.updateTransformer();
    },

    updateTransformer() {
      // here we need to manually attach or detach Transformer node
      const transformerNode = this.$refs.transformer.getStage();

      const stage = transformerNode.getStage();

      const { selectedShapeName } = this;

      const selectedNode = stage.findOne("." + selectedShapeName);
      // do nothing if selected node is already attached
      if (selectedNode === transformerNode.node()) {
        return;
      }

      if (selectedNode) {
        // attach to another node
        transformerNode.attachTo(selectedNode);
      } else {
        // remove transformer
        transformerNode.detach();
      }
      transformerNode.getLayer().batchDraw();
    }
  }
};
</script>


