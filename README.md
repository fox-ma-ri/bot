# Guild Utils J
klasaで作られています。

## 機能
 - 読み上げ

## prefix
デフォルトのプレフィックスは$です。  
メンションでも動作します。  
また``[~] Guild Utils J``のようにニックネームを変更してやると~がprefixになります。  
ニックネームの変更イベントに反応しますのでbotがオフラインであった場合など変更が反映されない場合があります。  
その場合はお手数ですがコマンドで設定してやるか時間をおいてニックネームをもう一度設定してください。  
prefixを設定するコマンドは以下です。
```
$conf set prefix !
```

## 読み上げ
### 基本
以下のどちらかのコマンドで読み上げを開始します。
```
$start
$s
```
読み上げが開始されたあとに``$s``を別のテキストチャンネルで実行することでそのチャンネルも読み上げの対象に追加することができます。


チャンネル単位で読み上げを終了するには以下のコマンドを使用します。
```
$ec
```

以下のコマンドで読み上げを終了します。
```
$e
```

発言者の名前あるいはメンションを読み上げるときの読みの設定が可能です。
```
$gmconf set speech.readName ねこ
```
サーバー全体で名前の読み上げを無効にする場合は次のコマンドを使用してください。
```
$conf set speech.readName false
```
個人がサーバー内で名前の読み上げを無効にする場合は次のコマンドを使用してください。
```
$memconf set speech.readName ""
```

その他tone,volume,speed,kindが各ギルドで別個に設定できます。  
kindの一覧は以下のコマンドでご確認ください。
```
$help s
```
### 辞書
kuromoji.jsの辞書を少し変更してwを切り出せるようにしたものによって形態素解析し、形態素ごとに辞書に当てはまったものを置換する形で使用しています。  
kuromoji.jsとOpenJTalk内部のmecabで使用されている辞書が異なるため、読み上げ結果と読みの出力が異なる場合があります。  

```
$kuromoji 辞書に登録したい単語が載っている文章。
$aw 単語 たんご 名詞 一般 * *
```

形態素解析の前段と後段で単純置換が行なえます。
```
$awb キャラ名 「キャラ名」
$awa 単語 たんご
```

誤った読み上げに関する情報を募集しています。(どうにかして修正できるかもしれないので)

### jumanppコマンドについて
将来のバージョンで使用する予定のソフトウェアです。  
ちゃんと書けばこんなにマシになるんだと思うためにつけました。いまのところそれ以外の意味はありません。

## セルフホスト(ビルド)
**Git LFSが必要です**  
**Mixerを使用する場合は[Mixer](https://github.com/guild-utils/mixer)も参照してください**  
shell  
```
git clone --depth 1 https://github.com/guild-utils/bot.git
cd guild-utils-j
docker network create -d bridge guj-net
docker run -d --net guj-net --name guj-db -e POSTGRES_PASSWORD=mysecretpassword -v $(pwd)/docker/guj/dbdata:/var/lib/postgresql/data postgres:alpine
docker build -t guj-main .
docker build -t guj-sub -f Sub.DockerFile .
docker stop guj-main||true
docker stop guj-sub||true
docker rm guj-sub||true
docker run -d --name guj-main --net guj-net --env-file=.main.env guj-main
docker run -d --name guj-sub --net guj-net --env-file=.sub.env -v $(pwd)/sub-1:/usr/app/packages/presentation/sub/dist/bwd guj-sub
```

power-shell
```
git clone --depth 1 https://github.com/guild-utils/bot.git
cd guild-utils-j
docker network create -d bridge guj-net
docker run -d --net guj-net --name guj-db -e POSTGRES_PASSWORD=mysecretpassword -v ${pwd}/docker/guj/dbdata:/var/lib/postgresql/data postgres:alpine
docker build -t guj-main .
docker build -t guj-sub -f Sub.DockerFile .
docker stop guj-main
docker stop guj-sub
docker rm guj-main
docker rm guj-sub
docker run -d --name guj-main --net guj-net --env-file=.main.env guj-main
docker run -d --name guj-sub --net guj-net --env-file=.sub-1.env -v ${pwd}/docker/guj/sub-1:/usr/app/packages/presentation/sub/dist/bwd guj-sub
```


.main.env  
```
GUILD_UTILS_J_MAIN_DISCORD_TOKEN=
GOOGLE_API_CREDENTIAL=
GUILD_UTILS_J_PROVIDER=postgresql
POSTGRES_DATABASE=postgres
POSTGRES_PASSWORD=mysecretpassword
POSTGRES_HOST=guj-db
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_MAX=30
POSTGRES_IDLE_TIMEOUT=1000
```

.sub.env  
```
GUILD_UTILS_J_SUB_DISCORD_TOKEN=
GUILD_UTILS_J_PROVIDER=json
GUILD_UTILS_J_RPC_SERVER=guj-main:50051
```
### 余計なものいらないので読み上げだけください!
**Git LFSが必要です**  
```
git clone --depth 1 https://github.com/guild-utils/bot.git
cd guild-utils-j
docker run -d --net guj-net --name guj-db -e POSTGRES_PASSWORD=mysecretpassword -v dbdata:/var/lib/postgresql/data postgres-alpine
docker build -f WithoutJumanpp.Dockerfile -t guj .
docker stop guj||true
docker rm guj||true
docker run -d --name guj --net guj-net --env-file=.env guj
```

.env  
```
GUILD_UTILS_J_DISCORD_TOKEN=
GUILD_UTILS_J_PROVIDER=postgresql
POSTGRES_DATABASE=postgres
POSTGRES_PASSWORD=mysecretpassword
POSTGRES_HOST=guj-db
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_MAX=30
POSTGRES_IDLE_TIMEOUT=1000
```


### docker hubのやつを使う。
```
docker pull tignear/guj-main:latest
docker pull tignear/guj-sub:latest
docker run -d --net guj-net --name guj-db -e POSTGRES_PASSWORD=mysecretpassword -v dbdata:/var/lib/postgresql/data postgres-alpine
docker stop guj-main
docker stop guj-sub
docker rm guj-main
docker rm guj-sub
docker run -d --name guj-main --net guj-net --env-file=.main.env tignear/guj-main
docker run -d --name guj-sub --net guj-net --env-file=.sub.env -v ${pwd}/docker/guj/sub-1:/usr/app/packages/presentation/sub/dist/bwd tignear/guj-sub
docker run -d --name guj-mixer --net guj-net tignear/guj-mixer
```

.main.env  
```
GUILD_UTILS_J_MAIN_DISCORD_TOKEN=
GOOGLE_API_CREDENTIAL=
GUILD_UTILS_J_PROVIDER=postgresql
POSTGRES_DATABASE=postgres
POSTGRES_PASSWORD=mysecretpassword
POSTGRES_HOST=guj-db
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_MAX=30
POSTGRES_IDLE_TIMEOUT=1000
```

.sub.env  
```
GUILD_UTILS_J_SUB_DISCORD_TOKEN=
GUILD_UTILS_J_PROVIDER=json
GUILD_UTILS_J_RPC_SERVER=guj-main:50051
```

## ロードマップ

### v1
- 辞書のインポート、エクスポート。
- 読み上げ設定インポート、エクスポート。
- 読み上げ設定ガチャ。
- 読み上げ設定プリセット。(コマンド一つで声を変えれるように)
- DMでの音声生成。
- Embed Viewによる表示。
- スケジューリング機能のDSLを根本的に改善する(GoogleSpreadSheetを使い続けるかも要検討)
- CI
- 読み上げ時間の制限
## v2
- OpenJTalkを改造してjumanppを用いて喋るようにする。
- Web Dashboard

## ライセンス
htsvoice、OpenJTalk、HTS Engine API、Jumanpp、kuromoji-js、klasa-member-gatewayについてはそれぞれのライセンスにしたがいます。  
その他の他者の著作物についてもそのライセンスに従います。  
tignear(tig#2552)の制作部分はUnlicenseです。  

## 制作
プログラム: tignear(tig#2552)  