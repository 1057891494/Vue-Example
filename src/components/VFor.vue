<template>
  <section class='vFor'>
    <ul>
      <li class="title">用 v-for 把一个数组对应为一组元素</li>
      <li>
        <ul>
          <li v-for='row in listdata'>
            {{row.key}}:{{row.value}}
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li v-for='(row,key) in listdata'>
            {{row.key}}:{{row.value}} => {{key}}
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li class="title">用 v-for 把一个对象对应为一组元素</li>
      <li>
        <ul>
          <li v-for='row in listdata2'>
            {{row}}
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li v-for='(value,key) in listdata2'>
            {{key}}:{{value}}
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li v-for='(value,key,index) in listdata2'>
            {{key}}:{{value}} => {{index}}
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li v-for='(value,key,index) in listdata2' v-bind:key="index">
            {{key}}:{{value}} => {{index}}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        listdata: [{
            'key': '名称',
            'value': '《宛若晴空》'
          },
          {
            'key': '作者',
            'value': '心叶'
          },
          {
            'key': '出自',
            'value': '轻小说《文学少女》'
          },
          {
            'key': '时间',
            'value': '2014-04-01'
          }
        ],
        listdata2: {
          '名称': '《宛若晴空》',
          '作者': '心叶',
          '出自': '轻小说《文学少女》',
          '时间': '2014-04-01'
        }
      }
    }
  }
</script>

<style>
  .vFor ul {
    margin: 0.3rem;
    margin-bottom: 0;
  }

  .vFor .title {
    color: red;
  }
</style>
