// ゲームに必要な変数の定義
var score = 0; // スコアの初期値
var gameDuration = 30; // ゲームの時間制限（秒）
var drums = document.getElementsByClassName('drum'); // 太鼓の要素を取得
// ゲームの開始処理
function startGame() {
  // スコアを初期化
  score = 0;
  updateScore();
  
  // ゲームの時間制限を設定
  setTimeout(endGame, gameDuration * 1000);
  
  // 太鼓のクリックイベントを設定
  for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener('click', clickDrum);
  }
}
// ゲームの終了処理
function endGame() {
  // 太鼓のクリックイベントを削除
  for (var i = 0; i < drums.length; i++) {
    drums[i].removeEventListener('click', clickDrum);
  }
  
  // ゲーム終了のメッセージを表示
  alert('ゲーム終了！あなたのスコアは ' + score + '点です。');
}
// 太鼓がクリックされたときの処理
function clickDrum(event) {
  // クリックされた太鼓の位置を取得
  var drum = event.target;
  
  // 太鼓を叩いたことを表すクラスを追加
  drum.classList.add('hit');
  
  // スコアを加算して表示を更新
  score++;
  updateScore();
  
  // 一定時間後に太鼓を元に戻す
  setTimeout(function() {
    drum.classList.remove('hit');
  }, 300);
}
// スコアを更新する処理
function updateScore() {
  var scoreElement = document.getElementById('score');
  scoreElement.textContent = 'スコア: ' + score + '点';
}

// ゲームを開始するボタンのクリックイベントを設定
var startButton = document.getElementById('startButton');
startButton.addEventListener('click', startGame);
