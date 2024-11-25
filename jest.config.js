module.exports = {
    preset: "ts-jest",
    testEnvironment: "node", // テストをNode.js環境で実行
    transform: {
      "^.+\\.tsx?$": "ts-jest", // TypeScriptファイルのトランスフォーマー
    },
}  