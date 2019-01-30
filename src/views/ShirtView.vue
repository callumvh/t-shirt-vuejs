<template>
  <div class="ShirtView">
    <input type="button" value="front<-->back" @click="frontToBack()">

    <FrontOfShirt v-show="front_visible"/>
    <!-- <FrontOfShirt/> -->
    <BackOfShirt v-show="back_visible"/>
  </div>
</template>

<script>
import FrontOfShirt from "@/components/shirts/FrontOfShirt.vue";
import BackOfShirt from "@/components/shirts/BackOfShirt.vue";
export default {
  components: {
    FrontOfShirt,
    BackOfShirt
  },
  data() {
    return {
      front_visible: true,
      back_visible: false
    };
  },
  methods: {
    frontToBack() {
      if (this.front_visible == true) {
        this.back_visible = true;
        this.front_visible = false;

        // this.back_visible = false;
      } else {
        this.back_visible = false;
        this.front_visible = true;
      }
    }
  }
};
</script>



