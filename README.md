# SAM Local Sandbox

AWS Lambda サービスの検証の叩き台リポジトリ。
Node.js を使ったシンプルな Lambda 関数を実装。

## ファイル構成

```plaintext
.
├── README.md
├── app
│ ├── app.mjs
│ └── package.json
└── template.yaml
```

---

### 各ファイルの説明

#### `README.md`

このファイルです。リポジトリの概要や使い方を記載しています。

---

#### `app/app.mjs`

Lambda 関数のエントリーポイントです。このファイルにビジネスロジックを記述します。

例:

```javascript
export const lambdaHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" }),
  };
};
```

#### `app/package.json`

Node.js の依存関係を管理するファイルです。ローカルでユニットテストを実行したり、関数をデプロイする際に必要なモジュールを指定します。

#### `template.yaml`

AWS SAM CLI のテンプレートファイルです。Lambda 関数や API Gateway の設定を定義します。

例:

```yaml
AWSTemplateFormatVersion: "2010-09-09"
Transform: AWS::Serverless-2016-10-31
Resources:
  HelloWorldFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: app/
      Handler: app.lambdaHandler
      Runtime: nodejs18.x
      Events:
        HelloWorld:
          Type: Api
          Properties:
            Path: /hello
            Method: get
```

## 実行方法

### ローカルで API を起動

以下のコマンドを実行してローカルで Lambda 関数をテストします。

```bash
sam build  && sam local start-api
```

ブラウザまたはターミナルで以下の URL にアクセスしてください。

```
http://{$localhost}:3000/hello
```

#### 期待するレスポンス:

```json
{
  "message": "Hello World!"
}
```

## 注意点

- このサンプルリポジトリは学習目的のため、セキュリティや本番環境の設定は考慮していません。
- 実際に AWS にデプロイする際は、適切な IAM ロールやセキュリティ設定を行ってください。
