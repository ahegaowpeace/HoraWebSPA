<template>
  <div id="app">
    <div id="header">
      <!--リンクタグを生成します。-->
      <router-link to="/">計算</router-link>
      <router-link to="/explain">説明</router-link>
      <router-link to="/rule">ルール</router-link>
    </div>
    <!--上記のリンクタグで設定したコンポーネントが表示される場所です。-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  font-size: 20px;
}

input {
  font-size: 20px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  height: 40px;
  background: white;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

#header a {
  text-decoration: none;
  color: #2c3e50;
  margin: 0 10px;
  padding: 3px 10px;
  background: #5ccebf;
}
</style>
