<template>
  <div class="ShirtView">
    <input name="button" type="button" value="front  <-->  back" >
    <label id="button" for="button" @click="frontToBack()">Front <-> Back</label>
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
<style>
input[type=button], input[type=submit], input[type=reset],label {
 font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: black;
    display: inline-block;
}
input[type=file],input{
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
input:focus + label,
input + label:hover {
    background-color:#42b983;
}
input + label {
	cursor: pointer; /* "hand" cursor */
  display: inline-block;
 
}
label {
  padding: 10px 20px;
  border-style: solid;
  border-color:#42b983
}

</style>




