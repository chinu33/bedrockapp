import './BedrockUI.css'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function callAWSBedrock(event){
    alert('Hello Bedrock Exam Studio Assistant!!!');
}

function BedrockUI() {
    return (
    <div className="bedRockDiv">
        <div class="bedRockHeaderDiv">
            <h2>Welcome to AWS Bedrock Exam Studio Assistant</h2>
        </div>
        <form method="post">
            <div class="container py-150">
                <h4 class="bedRockAskQuestion">Item Input</h4>
                <div class="bedRockTeaxtAreaDiv">
                    <textarea name="answer" id="answer-area" class="bedRockTeaxtAreaInput"  type="text" placeholder="Item Input"></textarea>
                </div>
                <div class="bedRockTeaxtAreaDiv">
                    <button class="bedRockSubmitButton" type="button" onClick= {callAWSBedrock} id="ask">Submit</button>
                </div>
                <h4 class="bedRockAskQuestion">Item Output</h4>
                <div class="bedRockTeaxtAreaDiv"> 
                    <textarea name="answer" id="answer-area" class="bedRockTeaxtAreaInput"  type="text" placeholder="Item Output"></textarea>
                </div>
            </div>
        </form>
    </div>);
  }
  
  export default BedrockUI;