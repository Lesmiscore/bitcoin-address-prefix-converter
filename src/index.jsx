const React = require("react");
const ReactDOM = require("react-dom");

const AddressConverterForm = require("./convform.jsx");

console.log(AddressConverterForm);

const App = () => {
    return (
        <div>
            <p>
                Without changing Hash part, this tools changes Prefix part of Bitcoin-like Base58 address.
            <br /> Bech32(SegWit), CashAddress(BCH), Zcash addresses are not supported.
            <br /> If it is Base58 address, ScriptSig address is also supported.
            <br /> BitcoinアドレスのようなBase58アドレスの、Hash部分を変更することなく、Prefixパートを変更します。
            <br /> Bech32(SegWit)、CashAddress(BCH)、Zcashアドレスには対応していませんのであしからず。
            <br /> Base58であればScriptSigアドレスにも対応しています。
            </p>
            <AddressConverterForm />
        </div>
    )
}

function onLoad(func) {
    if (window.addEventListener)
        window.addEventListener("load", func, false);
    else if (window.attachEvent)
        window.attachEvent("onload", func);
    else window.onload = func;
}

onLoad(() => {
    ReactDOM.render(<App />, document.querySelector('body'));
});