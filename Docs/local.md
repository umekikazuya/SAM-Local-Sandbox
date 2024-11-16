# Local環境で取り急ぎ検証したい人

## 001. Git Clone
```bash
git clone https://github.com/umekikazuya/SAM-Local-Sandbox.git
```

### 002. ローカルで必要なツールのインストール
- Docker
- SAM CLI

```bash
brew tap aws/tap
brew install aws-sam-cli
```


### 003. Lambda関数実行
```bash
sam build  && sam local start-api
```
