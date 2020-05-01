<template>
  <div>
    <form id="form">
      <h2>役</h2>
        <div class="box">
          <div class="item">
            <input name='1han' type="checkbox" value="立直" checked="checked" />立直<br>
            <input name="1han" type="checkbox" value="一発" />一発<br>
            <input name="1han" type="checkbox" value="門前清自摸和" />門前清自摸和<br>
            <input name="1han" type="checkbox" value="役牌" />役牌<br>
            <input name="1han" type="checkbox" value="タンヤオ" />タンヤオ<br>
            <input name="1han" type="checkbox" value="平和" />平和<br>
            <input name="1han" type="checkbox" value="一盃口" />一盃口<br>
            <input name="1han" type="checkbox" value="海底撈月" />海底撈月<br>
            <input name="1han" type="checkbox" value="河底撈魚" />河底撈魚<br>
            <input name="1han" type="checkbox" value="嶺上開花" />嶺上開花<br>
            <input name="1han" type="checkbox" value="槍槓" />槍槓<br>
          </div>
          <div class="item">
            <input name="2han" type="checkbox" value="ダブル立直" />ダブル立直<br>
            <input name="2han" type="checkbox" value="三色同順" />三色同順<br>
            <input name="2han" type="checkbox" value="三色同刻" />三色同刻<br>
            <input name="2han" type="checkbox" value="三暗刻" />三暗刻<br>
            <input name="2han" type="checkbox" value="一気通貫" />一気通貫<br>
            <input name="2han" type="checkbox" value="七対子" />七対子<br>
            <input name="2han" type="checkbox" value="対々和" />対々和<br>
            <input name="2han" type="checkbox" value="混全帯幺九" />混全帯幺九<br>
            <input name="2han" type="checkbox" value="三槓子" />三槓子<br>
          </div>
          <div class="item">
            <input name="3han" type="checkbox" value="二盃口" />二盃口<br>
            <input name="3han" type="checkbox" value="純全帯公九" />純全帯公九<br>
            <input name="3han" type="checkbox" value="混一色" />混一色<br>
          </div>
          <div class="item">
            <input name="4han" type="checkbox" value="小三元" />小三元<br>
            <input name="4han" type="checkbox" value="混老頭" />混老頭<br>
          </div>
          <div class="item">
            <input name="6han" type="checkbox" value="清一色" />清一色
          </div>
        </div>
      <h2>上がり</h2>
        <input name="agari" type="radio" value="lon" checked="checked" />ロン
        <input name="agari" type="radio" value="tsumo" />ツモ
      <h2>親/子</h2>
        <input name="oyako" type="radio" value="oya" checked="checked" />親
        <input name="oyako" type="radio" value="ko" />子
      <h2>鳴き</h2>
        <input name="naki" type="radio" value="ari" checked="checked" />有り
        <input name="naki" type="radio" value="nashi" />無し
      <h2>面子（中張牌）</h2>
      <span>明刻</span>
      <input name="chMinko" type="button" value="＋" id="chMinkoUp" />
      <input name="chMinko" type="button" value="リセット" id="chMinkoDown" />
      <input name="chMinko" type="text" value="0" id="chMinkoDisp" />
      <br>
      <span>暗刻</span>
      <input name="chAnko" type="button" value="＋" id="chAnkoUp" />
      <input name="chAnko" type="button" value="リセット" id="chAnkoDown" />
      <input name="chAnko" type="text" value="0" id="chAnkoDisp" />
      <br>
      <span>明槓</span>
      <input name="chMinkan" type="button" value="＋" id="chMinkanUp" />
      <input name="chMinkan" type="button" value="リセット" id="chMinkanDown" />
      <input name="chMinkan" type="text" value="0" id="chMinkanDisp" />
      <br>
      <span>暗槓</span>
      <input name="chAnkan" type="button" value="＋" id="chAnkanUp" />
      <input name="chAnkan" type="button" value="リセット" id="chAnkanDown" />
      <input name="chAnkan" type="text" value="0" id="chAnkanDisp" />
      <h2>面子（幺九牌）</h2>
      <span>明刻</span>
      <input name="yoMinko" type="button" value="＋" id="yoMinkoUp" />
      <input name="yoMinko" type="button" value="リセット" id="yoMinkoDown" />
      <input name="yoMinko" type="text" value="0" id="yoMinkoDisp" />
      <br>
      <span>暗刻</span>
      <input name="yoAnko" type="button" value="＋" id="yoAnkoUp" />
      <input name="yoAnko" type="button" value="リセット" id="yoAnkoDown" />
      <input name="yoAnko" type="text" value="0" id="yoAnkoDisp" />
      <br>
      <span>明槓</span>
      <input name="yoMinkan" type="button" value="＋" id="yoMinkanUp" />
      <input name="yoMinkan" type="button" value="リセット" id="yoMinkanDown" />
      <input name="yoMinkan" type="text" value="0" id="yoMinkanDisp" />
      <br>
      <span>暗槓</span>
      <input name="yoAnkan" type="button" value="＋" id="yoAnkanUp" />
      <input name="yoAnkan" type="button" value="リセット" id="yoAnkanDown" />
      <input name="yoAnkan" type="text" value="0" id="yoAnkanDisp" />
      <h2>ドラ</h2>
      <span>ドラ数</span>
      <input name="dora" type="button" value="＋" id="doraUp" />
      <input name="dora" type="button" value="リセット" id="doraDown" />
      <input name="dora" type="text" value="0" id="doraDisp" />
      <h2>雀頭</h2>
      <input name="janto" type="radio" value="jibasanngen" checked="checked" />自風/場風/三元
      <input name="janto" type="radio" value="renpu" />連風
      <input name="janto" type="radio" value="sonota" />数/客風
      <h2>待ち</h2>
      <input name="machi" type="radio" value="penkantanno" checked="checked" />辺張/嵌張/単騎/ノベタン
      <input name="machi" type="radio" value="sonota" />両面/シャボ
      <br>
      <input type="submit" value="CALC"/>
    </form>
    <p>ここに結果表示</p>
  </div>
</template>

<script>
window.onload = function () {
  // //////////// //
  // ボタンUI作成 //
  // //////////// //
  // オブジェクトと変数の準備
  var countdisp = document.getElementById('chMinkoDisp')
  var countupbtn = document.getElementById('chMinkoUp')
  var resetbtn = document.getElementById('chMinkoDown')
  var countvalue = 0
  // カウントアップボタンクリック処理
  countupbtn.onclick = function () {
    countvalue += 1
    countdisp.value = countvalue
  }
  // カウントアップボタンのマウスダウン処理
  countupbtn.onmousedown = function () {
    countupbtn.style.backgroundColor = '#00FF00'
  }
  // カウントアップボタンのマウスアップ処理
  countupbtn.onmouseup = function () {
    countupbtn.style.backgroundColor = ''
  }
  // リセットボタンのクリック処理
  resetbtn.onclick = function () {
    countvalue = 0
    countdisp.value = countvalue
  }
  // リセットボタンのマウスダウン処理
  resetbtn.onmousedown = function () {
    resetbtn.style.backgroundColor = '#00FF00'
  }
  // リセットボタンのマウスアップ処理
  resetbtn.onmouseup = function () {
    resetbtn.style.backgroundColor = ''
  }
  // オブジェクトと変数の準備
  var count2disp = document.getElementById('chAnkoDisp')
  var count2upbtn = document.getElementById('chAnkoUp')
  var reset2btn = document.getElementById('chAnkoDown')
  var count2value = 0
  // カウントアップボタンクリック処理
  count2upbtn.onclick = function () {
    count2value += 1
    count2disp.value = count2value
  }
  // カウントアップボタンのマウスダウン処理
  count2upbtn.onmousedown = function () {
    count2upbtn.style.backgroundColor = '#00FF00'
  }
  // カウントアップボタンのマウスアップ処理
  count2upbtn.onmouseup = function () {
    count2upbtn.style.backgroundColor = ''
  }
  // リセットボタンのクリック処理
  reset2btn.onclick = function () {
    count2value = 0
    count2disp.value = count2value
  }
  // リセットボタンのマウスダウン処理
  reset2btn.onmousedown = function () {
    reset2btn.style.backgroundColor = '#00FF00'
  }
  // リセットボタンのマウスアップ処理
  reset2btn.onmouseup = function () {
    reset2btn.style.backgroundColor = ''
  }
  // オブジェクトと変数の準備
  var count3disp = document.getElementById('chMinkanDisp')
  var count3upbtn = document.getElementById('chMinkanUp')
  var reset3btn = document.getElementById('chMinkanDown')
  var count3value = 0
  // カウントアップボタンクリック処理
  count3upbtn.onclick = function () {
    count3value += 1
    count3disp.value = count3value
  }
  // カウントアップボタンのマウスダウン処理
  count3upbtn.onmousedown = function () {
    count3upbtn.style.backgroundColor = '#00FF00'
  }
  // カウントアップボタンのマウスアップ処理
  count3upbtn.onmouseup = function () {
    count3upbtn.style.backgroundColor = ''
  }
  // リセットボタンのクリック処理
  reset3btn.onclick = function () {
    count3value = 0
    count3disp.value = count3value
  }
  // リセットボタンのマウスダウン処理
  reset3btn.onmousedown = function () {
    reset3btn.style.backgroundColor = '#00FF00'
  }
  // リセットボタンのマウスアップ処理
  reset3btn.onmouseup = function () {
    reset3btn.style.backgroundColor = ''
  }
  // オブジェクトと変数の準備
  var count4disp = document.getElementById('chAnkanDisp')
  var count4upbtn = document.getElementById('chAnkanUp')
  var reset4btn = document.getElementById('chAnkanDown')
  var count4value = 0
  // カウントアップボタンクリック処理
  count4upbtn.onclick = function () {
    count4value += 1
    count4disp.value = count4value
  }
  // カウントアップボタンのマウスダウン処理
  count4upbtn.onmousedown = function () {
    count4upbtn.style.backgroundColor = '#00FF00'
  }
  // カウントアップボタンのマウスアップ処理
  count4upbtn.onmouseup = function () {
    count4upbtn.style.backgroundColor = ''
  }
  // リセットボタンのクリック処理
  reset4btn.onclick = function () {
    count4value = 0
    count4disp.value = count4value
  }
  // リセットボタンのマウスダウン処理
  reset4btn.onmousedown = function () {
    reset4btn.style.backgroundColor = '#00FF00'
  }
  // リセットボタンのマウスアップ処理
  reset4btn.onmouseup = function () {
    reset4btn.style.backgroundColor = ''
  }
  // オブジェクトと変数の準備
  var count5disp = document.getElementById('yoMinkoDisp')
  var count5upbtn = document.getElementById('yoMinkoUp')
  var reset5btn = document.getElementById('yoMinkoDown')
  var count5value = 0
  // カウントアップボタンクリック処理
  count5upbtn.onclick = function () {
    count5value += 1
    count5disp.value = count5value
  }
  // カウントアップボタンのマウスダウン処理
  count5upbtn.onmousedown = function () {
    count5upbtn.style.backgroundColor = '#00FF00'
  }
  // カウントアップボタンのマウスアップ処理
  count5upbtn.onmouseup = function () {
    count5upbtn.style.backgroundColor = ''
  }
  // リセットボタンのクリック処理
  reset5btn.onclick = function () {
    count5value = 0
    count5disp.value = count5value
  }
  // リセットボタンのマウスダウン処理
  reset5btn.onmousedown = function () {
    reset5btn.style.backgroundColor = '#00FF00'
  }
  // リセットボタンのマウスアップ処理
  reset5btn.onmouseup = function () {
    reset5btn.style.backgroundColor = ''
  }
  // オブジェクトと変数の準備
  var count6disp = document.getElementById('yoAnkoDisp')
  var count6upbtn = document.getElementById('yoAnkoUp')
  var reset6btn = document.getElementById('yoAnkoDown')
  var count6value = 0
  // カウントアップボタンクリック処理
  count6upbtn.onclick = function () {
    count6value += 1
    count6disp.value = count6value
  }
  // カウントアップボタンのマウスダウン処理
  count6upbtn.onmousedown = function () {
    count6upbtn.style.backgroundColor = '#00FF00'
  }
  // カウントアップボタンのマウスアップ処理
  count6upbtn.onmouseup = function () {
    count6upbtn.style.backgroundColor = ''
  }
  // リセットボタンのクリック処理
  reset6btn.onclick = function () {
    count6value = 0
    count6disp.value = count6value
  }
  // リセットボタンのマウスダウン処理
  reset6btn.onmousedown = function () {
    reset6btn.style.backgroundColor = '#00FF00'
  }
  // リセットボタンのマウスアップ処理
  reset6btn.onmouseup = function () {
    reset6btn.style.backgroundColor = ''
  }
  // オブジェクトと変数の準備
  var count7disp = document.getElementById('yoMinkanDisp')
  var count7upbtn = document.getElementById('yoMinkanUp')
  var reset7btn = document.getElementById('yoMinkanDown')
  var count7value = 0
  // カウントアップボタンクリック処理
  count7upbtn.onclick = function () {
    count7value += 1
    count7disp.value = count7value
  }
  // カウントアップボタンのマウスダウン処理
  count7upbtn.onmousedown = function () {
    count7upbtn.style.backgroundColor = '#00FF00'
  }
  // カウントアップボタンのマウスアップ処理
  count7upbtn.onmouseup = function () {
    count7upbtn.style.backgroundColor = ''
  }
  // リセットボタンのクリック処理
  reset7btn.onclick = function () {
    count7value = 0
    count7disp.value = count7value
  }
  // リセットボタンのマウスダウン処理
  reset7btn.onmousedown = function () {
    reset7btn.style.backgroundColor = '#00FF00'
  }
  // リセットボタンのマウスアップ処理
  reset7btn.onmouseup = function () {
    reset7btn.style.backgroundColor = ''
  }
  // オブジェクトと変数の準備
  var count8disp = document.getElementById('yoAnkanDisp')
  var count8upbtn = document.getElementById('yoAnkanUp')
  var reset8btn = document.getElementById('yoAnkanDown')
  var count8value = 0
  // カウントアップボタンクリック処理
  count8upbtn.onclick = function () {
    count8value += 1
    count8disp.value = count8value
  }
  // カウントアップボタンのマウスダウン処理
  count8upbtn.onmousedown = function () {
    count8upbtn.style.backgroundColor = '#00FF00'
  }
  // カウントアップボタンのマウスアップ処理
  count8upbtn.onmouseup = function () {
    count8upbtn.style.backgroundColor = ''
  }
  // リセットボタンのクリック処理
  reset8btn.onclick = function () {
    count8value = 0
    count8disp.value = count8value
  }
  // リセットボタンのマウスダウン処理
  reset8btn.onmousedown = function () {
    reset8btn.style.backgroundColor = '#00FF00'
  }
  // リセットボタンのマウスアップ処理
  reset8btn.onmouseup = function () {
    reset8btn.style.backgroundColor = ''
  }
  // オブジェクトと変数の準備
  var count9disp = document.getElementById('doraDisp')
  var count9upbtn = document.getElementById('doraUp')
  var reset9btn = document.getElementById('doraDown')
  var count9value = 0
  // カウントアップボタンクリック処理
  count9upbtn.onclick = function () {
    count9value += 1
    count9disp.value = count9value
  }
  // カウントアップボタンのマウスダウン処理
  count9upbtn.onmousedown = function () {
    count9upbtn.style.backgroundColor = '#00FF00'
  }
  // カウントアップボタンのマウスアップ処理
  count9upbtn.onmouseup = function () {
    count9upbtn.style.backgroundColor = ''
  }
  // リセットボタンのクリック処理
  reset9btn.onclick = function () {
    count9value = 0
    count9disp.value = count9value
  }
  // リセットボタンのマウスダウン処理
  reset9btn.onmousedown = function () {
    reset9btn.style.backgroundColor = '#00FF00'
  }
  // リセットボタンのマウスアップ処理
  reset9btn.onmouseup = function () {
    reset9btn.style.backgroundColor = ''
  }

  // ///////// //
  // query取得 //
  // ///////// //
  var query = (function () {
    var queryString = {}
    var queryItems = {}
    var queryItem = {}
    var i = {}
    var length = {}
    var matchs = {}
    var key = {}
    var pkey = {}
    var skey = {}
    var value = {}
    var list = {}
    var hash = {}
    var params = {}
    // クエリストリングの取得
    queryString = window.location.search || ''
    queryString = queryString.substr(1, queryString.length)
    // パラメター毎に分解
    queryItems = queryString.split('&')
    // 各パラメターをキー&バリューに分解
    for (i = 0, length = queryItems.length; i < length; i++) {
      // 1組取り出し
      queryItem = (queryItems[i] || '').split('=')
      // キー&バリューに分解
      key = queryItem[0]
      value = queryItem[1] ? window.decodeURIComponent(queryItem[1]) : undefined
      // キー文字列によってオブジェクトの作り方を変える
      // matchs = (/([\w$]*)\[([\w$]*)\]/g).exec(key)
      matchs = (/.*han/g).exec(key)
      if (matchs === null) {
        // 単純なキー&バリュー
        params[key] = value
      } else {
        // pkey = matchs[1]
        // skey = matchs[2]
        pkey = matchs[0]
        skey = matchs[1]
        if (!skey) {
          // 配列にバリューを格納
          list = params[pkey] = params[pkey] || []
          list[list.length] = value
        } else {
          // ハッシュにサブキーとバリューを格納
          hash = params[pkey] = params[pkey] || {}
          hash[skey] = value
        }
      }
    }
    return params
  })()
  console.log(query)

  // //////// //
  // 計算処理 //
  // //////// //
  var fusu = 20
  var hansu = 0
  var notenFlag = 0
  var kuiSagariFlag = 0
  var kisoten = 0
  var koHarai = 0
  var oyaHarai = 0
  // 配列数１の時str型になる対応が必要 //
  //    上記の場合[1]が一文字になる    //
  //              １翻加算             //
  if (query['1han']) {
    var hanNum = query['1han'].length
    hansu = hansu + hanNum
  }
  //              ２翻加算             //
  if (query['2han']) {
    hanNum = query['2han'].length
    hansu = hansu + (hanNum * 2)
  }
  //              ３翻加算             //
  if (query['3han']) {
    hanNum = query['3han'].length
    hansu = hansu + (hanNum * 3)
  }
  //              ４翻加算             //
  if (query['4han']) {
    hanNum = query['4han'].length
    hansu = hansu + (hanNum * 4)
  }
  //              ６翻加算             //
  if (query['6han']) {
    hanNum = query['6han'].length
    hansu = hansu + (hanNum * 6)
  }
  // 食い下がり減算 //
  if (query.naki === 'ari') {
    // 1han //
    if (query['1han']) {
      for (var i = 0; i < query['1han'].length; i++) {
        if (query['1han'][i] === '立直' || query['1han'][i] === '立') {
          console.log('鳴き有り/立直あり')
          kuiSagariFlag = 1
        }
      }
      if (kuiSagariFlag >= 1) {
        kuiSagariFlag = 0
        hansu = hansu - 1
      }
    // 1hanおわり //
    }
    // 2han //
    if (query['2han']) {
      // 三色同順 //
      for (var j = 0; j < query['2han'].length; j++) {
        if (query['2han'][j] === '三色同順' || query['2han'][j] === '三') {
          console.log('鳴き有り/三色同順あり')
          kuiSagariFlag = 1
        }
      }
      if (kuiSagariFlag >= 1) {
        kuiSagariFlag = 0
        hansu = hansu - 1
      }
      // 混全帯幺九 //
      for (var k = 0; k < query['2han'].length; k++) {
        if (query['2han'][k] === '混全帯幺九' || query['2han'][k] === '混') {
          console.log('鳴き有り/混全帯幺九あり')
          kuiSagariFlag = 1
        }
      }
      if (kuiSagariFlag >= 1) {
        kuiSagariFlag = 0
        hansu = hansu - 1
      }
      // 一気通貫 //
      for (var l = 0; l < query['2han'].length; l++) {
        if (query['2han'][l] === '一気通貫' || query['2han'][l] === '一') {
          console.log('鳴き有り/一気通貫あり')
          kuiSagariFlag = 1
        }
      }
      if (kuiSagariFlag >= 1) {
        kuiSagariFlag = 0
        hansu = hansu - 1
      }
    // 2hanおわり //
    }
    // 3han //
    if (query['3han']) {
      // 純全帯幺九 //
      for (var m = 0; m < query['3han'].length; m++) {
        if (query['3han'][m] === '純全帯幺九' || query['3han'][m] === '純') {
          console.log('鳴き有り/純全帯幺九あり')
          kuiSagariFlag = 1
        }
      }
      if (kuiSagariFlag >= 1) {
        kuiSagariFlag = 0
        hansu = hansu - 1
      }
      // 混一色 //
      for (var n = 0; n < query['3han'].length; n++) {
        if (query['3han'][n] === '混一色' || query['3han'][n] === '混') {
          console.log('鳴き有り/混一色あり')
          kuiSagariFlag = 1
        }
      }
      if (kuiSagariFlag >= 1) {
        kuiSagariFlag = 0
        hansu = hansu - 1
      }
    // 3hanおわり //
    }
    // 6han //
    if (query['6han']) {
      // 清一色 //
      for (var o = 0; o < query['6han'].length; o++) {
        if (query['6han'][o] === '清一色' || query['6han'][o] === '清') {
          console.log('鳴き有り/清一色あり')
          kuiSagariFlag = 1
        }
      }
      if (kuiSagariFlag >= 1) {
        kuiSagariFlag = 0
        hansu = hansu - 1
      }
    // 6hanおわり //
    }
  // 食い下がり減算おわり //
  }
  // ノーテン判定 //
  if (hansu <= 0) {
    notenFlag = 1
  }
  // ドラ加算 //
  if (query.dora !== 0) {
    hansu = hansu + Number(query.dora)
  }
  // 上り符数判定  //
  if (query.agari === 'lon' && query.naki === 'nashi') {
    fusu = fusu + 10
  } else if (query.agari === 'tsumo') {
    fusu = fusu + 2
  }
  // 面子(中張牌)符数判定  //
  if (query.chMinko !== 0) {
    fusu = fusu + (query.chMinko * 2)
  }
  if (query.chAnko !== 0) {
    fusu = fusu + (query.chAnko * 4)
  }
  if (query.chMinkan !== 0) {
    fusu = fusu + (query.chMinkan * 8)
  }
  if (query.chAnkan !== 0) {
    fusu = fusu + (query.chAnkan * 16)
  }
  // 面子(幺九牌)符数判定  //
  if (query.yoMinko !== 0) {
    fusu = fusu + (query.yoMinko * 4)
  }
  if (query.yoAnko !== 0) {
    fusu = fusu + (query.yoAnko * 8)
  }
  if (query.yoMinkan !== 0) {
    fusu = fusu + (query.yoMinkan * 16)
  }
  if (query.yoAnkan !== 0) {
    fusu = fusu + (query.yoAnkan * 32)
  }
  // 雀頭符数判定  //
  if (query.janto === 'jibasanngen') {
    fusu = fusu + 2
  }
  if (query.janto === 'renpu') {
    fusu = fusu + 2
  }
  // 待ち符数判定  //
  if (query.machi === 'penkantanno') {
    fusu = fusu + 2
  }
  // 符丸め //
  fusu = (Math.ceil(fusu / 10) * 10)
  //  子  //
  if (query.oyako === 'ko') {
    kisoten = fusu * 4 * (2 ** (hansu + 2))
  }
  //  親  //
  if (query.oyako === 'oya') {
    kisoten = fusu * 6 * (2 ** (hansu + 2))
  }
  //  丸め  //
  kisoten = (Math.ceil(kisoten / 100) * 100)
  // 0翻判定 //
  if (hansu <= 0) {
    kisoten = 0
  }
  // 満貫以上判定（子） //
  if (query.oyako === 'ko') {
    if (hansu === 3 && fusu >= 70) {
      kisoten = 8000
    }
    if (hansu === 4 && (fusu => 40 && fusu <= 60)) {
      kisoten = 8000
    }
    if (hansu === 5) {
      kisoten = 8000
    }
    if (hansu === 6 || hansu === 7) {
      kisoten = 12000
    }
    if (hansu >= 8 && hansu <= 10) {
      kisoten = 16000
    }
    if (hansu >= 11 && hansu <= 12) {
      kisoten = 24000
    }
    if (hansu >= 13) {
      kisoten = 32000
    }
  }
  // 満貫以上判定（親） //
  if (query.oyako === 'oya') {
    if (hansu === 3 && fusu >= 70) {
      kisoten = 12000
    }
    if (hansu === 4 && (fusu => 40 && fusu <= 60)) {
      kisoten = 12000
    }
    if (hansu === 5) {
      kisoten = 12000
    }
    if (hansu === 6 || hansu === 7) {
      kisoten = 18000
    }
    if (hansu >= 8 && hansu <= 10) {
      kisoten = 24000
    }
    if (hansu >= 11 && hansu <= 12) {
      kisoten = 36000
    }
    if (hansu >= 13) {
      kisoten = 48000
    }
  }
  // 表示用計算（親） //
  if (query.oyako === 'oya') {
    if (query.agari === 'tsumo') {
      koHarai = kisoten / 3
      oyaHarai = ''
    } else if (query.agari === 'lon') {
      koHarai = kisoten
      oyaHarai = ''
    }
  }
  // 表示用計算（子） //
  if (query.oyako === 'ko') {
    if (query.agari === 'tsumo') {
      koHarai = kisoten / 4
      oyaHarai = kisoten / 2
    } else if (query.agari === 'lon') {
      koHarai = kisoten
      oyaHarai = ''
    }
  }
  //  丸め  //
  koHarai = (Math.ceil(koHarai / 100) * 100)
  oyaHarai = (Math.ceil(oyaHarai / 100) * 100)
  if (notenFlag === 1) {
    koHarai = 0
    oyaHarai = 0
  }
  console.log(koHarai)
  console.log(oyaHarai)
}
</script>

<style>
  .box {
    display: flex;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
  }
  .item {
    text-align: left;
  }
</style>
