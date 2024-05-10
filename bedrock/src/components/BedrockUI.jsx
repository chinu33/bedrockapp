import './BedrockUI.css'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'

async function callAWSBedrock(event){
    alert('Hello Bedrock Exam Studio Assistant!!!');
    let input = document.getElementById('question-area').value;
    alert(input);

    let response = await fetch('', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': ""
        },
        body: JSON.stringify({
            prompt: input
        })
    });

    let responseText = await response.json();
    // alert(responseText['body']);
    document.getElementById('answer-area').value = responseText['body'];
}

function BedrockUI() {
    return (
    <div className="bedRockDiv">
        <div class="bedRockHeaderDiv">
            <h2>Welcome to AWS Bedrock Exam Studio Assistant</h2>
        </div>
        <form method="post">
            <div className="container py-150">
                <h4 className="bedRockAskQuestion">Item Input</h4>
                <div className="bedRockTeaxtAreaDiv">
                    <textarea name="answer" id="question-area" className="bedRockTeaxtAreaInput"  type="text" placeholder="Item Input"></textarea>
                </div>
                <div className="bedRockTeaxtAreaDiv">
                    <button class="bedRockSubmitButton" type="button" onClick= {callAWSBedrock} id="ask">Submit</button>
                </div>
                <h4 className="bedRockAskQuestion">Item Output</h4>
                <div className="bedRockTeaxtAreaDiv"> 
                    <textarea name="answer" id="answer-area" className="bedRockTeaxtAreaInput"  type="text" placeholder="Item Output"></textarea>
                </div>
            </div>
        </form>
    </div>);
  }
  
  export default BedrockUI;
