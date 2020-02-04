# Getting Started

## Install Signatory Server

```
npm install -g @etclabscore/signatory
```

## Run the server

```
signatory
// running at 8002
```

## Create your first account
you can do this by creating a JSON-RPC request to the `createAccount` method

<iframe src="http://inspector.open-rpc.org/?url=http://localhost:8002&request[jsonrpc]=2.0&request[method]=createAccount&request[params][0][name]=act&request[params][0][passphrase]=baz" style="border: none; width: 100%; height: 300px;"/>



## Sign a message

First use `eserialize` to convert a string to hex:

<iframe src="https://eserialize.com/?input=string&output=hex&value=hello%20world" style="border: none; width: 100%; height: 300px;" />

for example `hello world` produces `0x68656c6c6f20776f726c64`.


Then make a JSON-RPC request to the `sign` method to sign the message with the account you created:

**Make sure you replace the example address with the one you created in the previous steps**

<iframe src="http://inspector.open-rpc.org/?url=http://localhost:8002&request[jsonrpc]=2.0&request[method]=sign&request[params][0]=0x68656c6c6f20776f726c64&request[params][1]=0x90ee510fb88ea47a84b45a6d983a0bc6b193e385&request[params][2]=baz&request[params][3]=61" style="border: none; width: 100%; height: 300px;"/>

and you should see a signed message as the result:

```
{
    "jsonrpc": "2.0",
    "result": "0x5377edbade526fa10b8f62a53a1c39e817de42a0b11ae585789a2e74b12fbca63bb319b6a8579246cb62dcea0af7047d836ec48a133f3487055fd33822192bdd9e",
    "id": 0
}
```

