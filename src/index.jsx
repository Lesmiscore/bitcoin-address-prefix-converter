import React from "react";
import { render } from "react-dom";
import {
    Alert, Button
} from "react-bootstrap";

import AddressConverterForm from "./convform.jsx";

const App = () => (
    <div>
        <Alert bsStyle="info">
            <p>
                Without changing Hash part, this tools changes Prefix part of Bitcoin-like Base58 address.
                <br /> Bech32(SegWit), CashAddress(BCH), Zcash addresses are not supported.
                <br /> If it is Base58 address, ScriptSig address is also supported.
                <br /> All operation will be done locally. This program won't send anything.
            </p>
            <p>
                BitcoinアドレスのようなBase58アドレスの、Hash部分を変更することなく、Prefixパートを変更します。
                <br /> Bech32(SegWit)、CashAddress(BCH)、Zcashアドレスには対応していませんのであしからず。
                <br /> Base58であればScriptSigアドレスにも対応しています。
                <br /> 全ての操作はブラウザ内部で行われます。いかなるデータを送信することはありません。
            </p>
        </Alert>
        <Alert bsStyle="danger">
            <p>This tool won't require any private keys. If you prompted to type the key, IT'S SCAM.</p>
            <p>このツールは秘密鍵を必要としません。入力を要求された場合、それは詐欺です。</p>
        </Alert>
        <AddressConverterForm />
    </div>
)

function onLoad(func) {
    if (window.addEventListener)
        window.addEventListener("load", func, false);
    else if (window.attachEvent)
        window.attachEvent("onload", func);
    else window.onload = func;
}

onLoad(() => {
    render(<App />, document.querySelector('#main'));
});