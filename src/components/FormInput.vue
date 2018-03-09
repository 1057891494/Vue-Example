<template>
  <section class="formInput">
    <ul>
      <li class='title'>--1.基础用法--</li>
      <li class="little-title">#文本</li>
      <li>
        <input type="text" v-model='modelname1'> 文本的值为 : {{modelname1}}
      </li>
      <li class="little-title">#多行文本</li>
      <li>
        <textarea v-model='modelname2' cols="60" rows="3"></textarea>
        <div style='white-space:pre-line;'>
          {{modelname2}}
        </div>
      </li>
      <li class="little-title">#复选框</li>
      <li>
        <!--注意modelname3是一个数组-->
        <input type="checkbox" id='ck1' value='ck1' v-model='modelname3'>ck1
        <input type="checkbox" id='ck2' value='ck2' v-model='modelname3'>ck2
        <input type="checkbox" id='ck3' value='ck3' v-model='modelname3'>ck3
        <br /> 你选择的有：{{modelname3}}
      </li>
      <li class="little-title">#单选按钮</li>
      <li>
        <input type="radio" value='rd1' v-model='modelname4'>rd1
        <input type="radio" value='rd2' v-model='modelname4'>rd2
        <input type="radio" value='rd3' v-model='modelname4'>rd3
        <br />你选择的是：{{modelname4}}
      </li>
      <li class="little-title">#选择框</li>
      <li>
        <select v-model='modelname5'>
        <option disabled value=''>请选择</option>
        <option>选项一</option>
        <option>选项二</option>
        <option>选项三</option>
        </select> 你选择的是：{{modelname5}}
      </li>
      <li class="little-title">#多选框</li>
      <li>
        <select v-model='modelname6' multiple>
          <option>选项一</option>
       <option value='key-二'>选项二</option>
   <option>选项三</option>
     </select> 你选择的有：{{modelname6}}
      </li>
    </ul>
    <ul>
      <li class="title">--2.值绑定--</li>
      <li class="little-title">#复选框</li>
      <li>
        <input type="checkbox" v-model='modelname7' true-value='yes1' false-value='no1' />modelname7={{modelname7}}
      </li>
      <li class="little-title">#单选按钮</li>
      <li>
        <input type="radio" v-model='modelname8' v-bind:value='tempvalue1' />值哦-1
        <input type="radio" v-model='modelname8' v-bind:value='tempvalue2' />值哦-2
        <br />modelname8={{modelname8}}
      </li>
      <li class="little-title">#选择框</li>
      <li>
        <select v-model='modelname9'>
          <option v-bind:value="{val:1}">temp9-1</option>
          <option v-bind:value="{val:2}">temp9-2</option>
          <option v-bind:value="{val:3}">temp9-3</option>
        </select>
        modelname9={{modelname9}}
      </li>
    </ul>
    <ul>
      <li class="title">--3.修饰符--</li>
      <li class='little-title'>#.number</li>
      <li>
        <!--强制类型为number-->
        <input type="text" v-model.number='modelname10' >
        {{typeof modelname10}}
      </li>
      <li class='little-title'>#.trim</li>
      <li>
        <!--去掉二边的空格-->
        <input type="text" v-model.trim='modelname11' >
        -{{modelname11}}-
        <input type="text" v-model='modelname12' >
        -{{modelname12}}-
        <!--还有别的修饰符，具体看文档-->
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tempvalue1: "值哦-1",
      tempvalue2: "值哦-2",
      modelname1: "初始化1",
      modelname2: "初始化2",
      modelname3: [],
      modelname4: "",
      modelname5: "",
      modelname6: [],
      modelname7: "",
      modelname8: "",
      modelname9: {},
      modelname10: "",
      modelname11: "",
      modelname12: ""
    };
  }
};
</script>

<style>
.formInput ul {
  margin: 0.3rem;
  margin-bottom: 0;
}

.formInput .little-title {
  color: brown;
  line-height: 2em;
}

.formInput .title {
  color: red;
}
</style>
