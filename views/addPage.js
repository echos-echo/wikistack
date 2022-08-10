const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div><input name='name' type='text' placeholder='author name'></div>
    
    <div><input name='email' type='text' placeholder='author email'></div>
    <hr>
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div><input name='content' type='textarea' placeholder='put your content here!'></div>
    
    <div>
      <input name='status' type='radio' value='open' id='open'>
      <label for='open'>Status: Open</label>
    </div>
    <div>
      <input name='status' type='radio' value='closed' id='closed'></div>
      <label for='closed'>Status: Closed</label>
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);