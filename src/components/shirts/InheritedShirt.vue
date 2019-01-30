<template>
  <div id="app">
    <!-- <input @click="trueOrFalse_coffee=false" type="button" value="hide coffee"> -->
    <!-- <input type="button" value="save stage" @click="savetoStage()"> -->
    <!-- <br> -->
    <input type="file" id="file" name="file" value="upload image" @change="onFileSelected">
    <label for="file">Choose your own image...</label>

    <v-stage
      ref="stage"
      :config="stageSize"
      @mousedown="handleStageMouseDown"
      @touchstart="handleStageTouchStart"
    >
      <v-layer ref="layer">
        <v-image
          :style="{color:'red'}"
          :width="shirt_image_width"
          :height="shirt_image_height"
          :listening="false"
          :preventDefault="true"
          :config="{image: shirt_image,name:'shirt',visible:shirt_image_bool}"
          :draggable="true"
        />

        <v-image  :config="{image:eggs_image,name:'eggs'}" :draggable="true"></v-image>
        <v-image
          
          :config="{image:coffee_image,name:'coffee',visible:trueOrFalse_coffee }"
          :draggable="true"
        ></v-image>
        <v-rect :visible="false" v-for="item in rectangles" :key="item.id" :config="item"/>
        <v-image
          :preventDefault="true"
          :draggable="true"
          :visible="true"
          :config="{image:image_list[0],name:'image_2'}"
        ></v-image>
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
    <!-- <v-stage :config="stateObject"></v-stage> -->
  </div>
</template>
<script>
import white_shirt_url from "@/assets/new_front.png";
import back_of_shirt_url from "@/assets/new_back.png";

let stageWidth = window.innerWidth;
let stageHeight = window.innerHeight;

export default {
  props: {
    back_prop: Boolean
  },
  created() {
    let Eggs = new window.Image();

    Eggs.src =
      "https://www.cronj.com/blog/wp-content/uploads/2015/12/HTTPS-Secure-Padlock.png";
    Eggs.onload = () => {
      this.stickerResize(Eggs);

      this.eggs_image = Eggs;
    };
    const coffee = new window.Image();

    coffee.src =
      "https://www.pngpix.com/wp-content/uploads/2016/10/Coffee-Beans-PNG-Transparent-Image.png";
    coffee.onload = () => {
      // image_eggs.name = "eggs";
      this.stickerResize(coffee);
      this.coffee_image = coffee;
      
    };
    let width = window.innerWidth;
    let height = window.innerHeight;
    this.stageHeight = height;
    this.stageWidth = width;

    const image = new window.Image();
    if (this.back_prop == true) {
      image.src = back_of_shirt_url;
    } else {
      image.src = white_shirt_url;
    }
    // console.log(image.width);

    image.onload = () => {
      // console.log(image.height);
      // console.log(image.width);
      // this.shirt_image_width = image.width;
      // this.shirt_image_height = image.height;
      this.shirt_image = image;
      // this.changeRect();

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
  },

  data() {
    return {
      stateObject: {},
      name: "InheritedShirt",
      trueOrFalse_coffee: true,
      window: {
        width: 0,
        height: 0
      },
      stageSize: {
        width: stageWidth - 10,
        height: stageHeight
      },

      shirt_image: null,
      shirt_image_width: 0,
      shirt_image_height: 0,
      back_of_shirt: null,

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
      file_list: [],
      image_list: [],
      selectedShapeName: "",
      selectedImgName: "yod",
      counter: 0
    };
  },

  methods: {
    stickerResize(image_2) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let multiplyerscaleX = width / image_2.width;
      let multiplyerscaleY = height / image_2.height;

      if (multiplyerscaleX > multiplyerscaleY) {
        image_2.width = (multiplyerscaleY * image_2.width)/3 ;
        image_2.height = (multiplyerscaleY * image_2.height)/3 ;
        // console.log(image_2)
      }
      if (multiplyerscaleX < multiplyerscaleY) {
        image_2.width = (multiplyerscaleX * image_2.width)/3 ;
        image_2.height = (multiplyerscaleX * image_2.height)/3 ;
        console.log(image_2)
      }
    },
    onFileSelected(event) {
      // var reader = new FileReader();

      // this.file_list[0] = ;
      const image_2 = new window.Image();

      image_2.src = window.URL.createObjectURL(event.target.files[0]);
      // console.log();
      image_2.onload = () => {
        this.stickerResize(image_2);
        // image_eggs.name = "eggs";
        this.image_list[0] = image_2;
        console.log(this.image_list[0]);
        // console.log(image_2);
        this.$forceUpdate();
      };

      console.log(this.image_list[0]);
      // console.log(this.image_list[0]);
    },
    savetoStage() {
      const stageRef = this.$refs.stage;

      const container = stageRef.getStage().container();
      console.log(this.$refs.stage.getStage().toJSON());
      this.stateObject = this.$refs.stage.getStage();
      console.log(stateObject);

      // console.log(container);
      // console.log(stage.toJSON());
    },
    changeRect() {
      const stageRef = this.$refs.stage;
      if (!stageRef) {
        return;
      }
      const container = stageRef.getStage().container();

      const height = container.offsetHeight;
      const width = container.offsetWidth;
      this.stageSize.width = width;
      this.stageSize.height = height;
      console.log("width = " + container.offsetWidth);
      console.log("height = " + container.offsetHeight);

      // const image = new window.Image();
      // if (this.back_prop == true) {
      //   image.src = back_of_shirt_url;
      // } else {
      //   image.src = white_shirt_url;
      // }
      // // console.log(image.width);
      // image.onload = () => {
      //   this.shirt_image = image;
      //   const stageRef = this.$refs.stage;
      //   if (!stageRef) {
      //     return;
      //   }
      //   const container = stageRef.getStage().container();
      //   // console.log(container);
      //   const height = container.offsetHeight;
      //   const width = container.offsetWidth;
      //   console.log(width);
      //   this.stageSize.width = width;
      //   this.stageSize.height = height;
      //   // console.log(this.image.width);
      //   // this.shirt_image_width = width;
      //   // this.shirt_image_height = height;
      //   this.shirt_image_height = height;
      //   // console.log("width " + this.stageSize.width);
      //   // console.log("height " + this.stageSize.height);
      //   // mine
      //   // console.log(this.shirt_image_width);
      //   // let multiplyerscaleX = width / this.shirt_image_width;
      //   // let multiplyerscaleY = height / this.shirt_image_height;
      //   // // console.log(this.shirt_image_height);
      //   // // if (multiplyerscaleX > multiplyerscaleY) {
      //   // //   this.shirt_image_width = multiplyerscaleY * this.shirt_image_width - 10;
      //   // //   this.shirt_image_height = multiplyerscaleY * this.shirt_image_height;
      //   // //   console.log("width changed");
      //   // // // }
      //   // // if (multiplyerscaleX < multiplyerscaleY) {
      //   // this.shirt_image_width = multiplyerscaleX * this.shirt_image_width - 10;
      //   // this.shirt_image_height = multiplyerscaleX * this.shirt_image_height;
      //   // console.log("height changed");
      //   // }
      //   // console.l
      // };
      // // const stageRef = this.$refs.stage;
      // // if (!stageRef) {
      // //   return;
      // // }
      // // const container = stageRef.getStage().container();
      // // // console.log(container);
      // // const height = container.offsetHeight;
      // // const width = container.offsetWidth;
      // // this.stageSize.width = width;
      // // this.stageSize.height = height;
      // // // console.log(this.image.width);
      // this.shirt_image_width = this.stageSize.width;
      // this.shirt_image_height = this.stageSize.height;
      // console.log("width " + this.stageSize.width);
      // console.log("height " + this.stageSize.height);
      // // mine
      // // console.log(this.shirt_image_width);
      // // let multiplyerscaleX = width / this.shirt_image_width;
      // // let multiplyerscaleY = height / this.shirt_image_height;
      // // // console.log(this.shirt_image_height);
      // // // if (multiplyerscaleX > multiplyerscaleY) {
      // // //   this.shirt_image_width = multiplyerscaleY * this.shirt_image_width - 10;
      // // //   this.shirt_image_height = multiplyerscaleY * this.shirt_image_height;
      // // //   console.log("width changed");
      // // // // }
      // // // if (multiplyerscaleX < multiplyerscaleY) {
      // // this.shirt_image_width = multiplyerscaleX * this.shirt_image_width - 10;
      // // this.shirt_image_height = multiplyerscaleX * this.shirt_image_height;
      // // console.log("height changed");
      // // }
      // // console.log(this.shirt_image.width);
    },
    // handleWindowResize() {},
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

      // find clicked rect by its name

      const rect = e.target;

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
      console.log(this.$refs);

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





