// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
var randomnum =Math.floor((Math.random()*10)+1);
// 入力回数（予想回数）
let kaisu = 4;
let nownum=0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    nownum++;
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  console.log(nownum+"回目の予想: "+yoso);
  if(kaisu>=nownum){
    console.log("答えは "+randomnum+ " でした. すでにゲームは終わっています")
  }else{
    if(yoso<randomnum){
        console.log("まちがい. 答えはもっと小さいですよ");
      }else if(yoso==randomnum){
        donsole.log("正解です. おめでとう")
      }else{
        console.log("まちがい. 答えはもっと小さいですよ");
      }
  }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}