<template>
  <section>
    <input type="button" value="点击查看数据" @click='show()'>
    <ul deep="1"></ul>
  </section>
</template>

<script>
export default {
  methods: {
    show() {
      fetch("./src/assets/web.json")
        .then(function(response) {
          console.log(response.headers.get("Content-Type"));
          console.log(response.headers.get("Date"));
          console.log(response.status);
          console.log(response.statusText);
          //下面这行是必须的
          return response.json();
        })
        .then(function(json) {
          (function appendNode(item, deep) {
            if (item.list && item.list.length > 0) {
              var ulT = $$('ul[deep="' + deep + '"]');
              $$(ulT[ulT.length - 1]).append(
                "<li hadchild='Y'>" +
                  item.name +
                  "<ul deep=" +
                  (deep - -1) +
                  "></ul></li>"
              );
              var flag;
              for (flag = 0; flag < item.list.length; flag++) {
                appendNode(item.list[flag], deep + 1);
              }
            } else {
              var ulT = $$('ul[deep="' + deep + '"]');
              $$(ulT[ulT.length - 1]).append("<li>" + item.name + "</li>");
            }
          })(json, 1);
        });
    }
  }
};
</script>
<style>
[deep] {
  margin-left: 1em;
  margin-left: 1em;
  list-style-type: none;
}
[deep] li {
  position: relative;
  line-height: 2em;
  position: relative;
}
[deep] li:before {
  content: "";
  border-left: 1px solid gray;
  border-bottom: 1px solid gray;
  left: -1.5em;
  top: -1em;
  position: absolute;
  right: auto;
  height: 2em;
  width: 1em;
}
[deep] li[hadchild="Y"]:not(:last-child):after {
  content: "";
  border-right: 1px solid gray;
  left: -2.5em;
  top: -0.9em;
  position: absolute;
  right: auto;
  height: 100%;
  width: 1em;
}
</style>

