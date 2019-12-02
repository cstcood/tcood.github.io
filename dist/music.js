const ap = new APlayer({
    container: document.getElementById('aplayer'),

    autoplay: false,
    lrcType: 2,
    fixed:true,
    mutex: true,
    volume: 0.7,
    autoplay: true,
    audio: [
      {
        name: "リセット",
        artist: '向井太一',
        url: "http://m7.music.126.net/20191202212709/4b586ce7a09d882d4fd5225cafa9fabb/ymusic/7868/6c75/5426/39d08faf66187baeabb6b3ec4f84e67e.mp3",
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001202eY0itdnz.jpg?max_age=2592000',
        lrc:'[00:01.43]编曲：CELSIOR COUPE\n[00:01.96]\n[00:08.74]走り出せればほら掴めるから\n[00:14.57]一度離した明日へのチケット\n[00:19.10]この場所から始まるから\n[00:24.18]取り戻すためもう一度リセット\n[00:28.36]\n[00:28.72]改札を出て目に映るサンセット\n[00:33.11]オレンジ色が滲んで見えて\n[00:37.87]流す涙を静かに照らして\n[00:42.79]帰る場所だって言ってる気がして\n[00:46.58]\n[00:48.21]並んで歩くほどに人と比べてばかり\n[00:57.58]いつのまにか背伸びして　\n[01:02.03]強がる自分に気づく\n[01:05.58]\n[01:05.99]走り出せればほら掴めるから\n[01:11.69]一度離した明日へのチケット\n[01:16.19]この場所から始まるから\n[01:21.46]取り戻すためもう一度リセット\n[01:25.70]\n[01:35.32]過去に縛られ枷を引きずって\n[01:40.03]身動きとれなくなってしまった\n[01:44.81]消えて忘れてしまいたいなんて\n[01:49.67]被害者ぶって逃げていただけ\n[01:54.52]\n[01:54.99]いつもより温い風呂の中で自問自答\n[02:04.53]悩んでいたことなんてちっぽけなこと\n[02:12.36]だったんだ\n[02:13.14]\n[02:13.51]挫けそうな時は立ち止まって\n[02:18.85]見つめ直して自分らしさへ\n[02:23.25]諦めない心を掴め\n[02:28.26]また最初からもう一度リセット\n[02:32.26]\n[02:33.91]色んなことを大袈裟にして\n[02:38.61]優しい心なくし傷つけ\n[02:43.45]自分が一番可愛くなって\n[02:48.32]気付けば今はひとりぽっちで\n[02:53.77]\n[02:54.60]また明日から笑い合えるよう\n[03:04.16]まずはここから変えられるよう\n[03:10.38]\n[03:10.76]走り出せればほら掴めるから\n[03:16.11]一度離した明日へのチケット\n[03:20.54]この場所から始まるから\n[03:25.71]取り戻すためもう一度リセット\n[03:29.13]\n[03:29.60]広がる世界は僕だけのものさ\n[03:34.26]もう一度　取り戻すリセット\n[03:39.02]踏み出す力が僕を満たすから\n[03:43.85]もう一度走り出すスタート'
      ,
      } 
      ]
});