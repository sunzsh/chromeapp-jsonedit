chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        var result = '';
        var sandbox = document.getElementById('sandbox');
        sandbox.value = '';
        sandbox.select();
        if (document.execCommand('paste')) {
            result = sandbox.value;
        }
        sandbox.value = '';
        sendResponse({clipboard: result});
    }
)