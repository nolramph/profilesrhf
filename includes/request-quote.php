<form id="profilesRhForm" name="sentMessage" novalidate>
    <h2 class="text-center font-italic mb-0">REQUEST A QUOTE</h2>
    <hr>
    <div class="form-group">
        <input type="text" class="form-control profilesRh-placeholder" name="name" id="name" placeholder="* NAME" required data-validation-required-message = "Please enter your name" >
        <p class="help-block text-danger"></p>
    </div>
    <div class="form-group">
        <input type="email" class="form-control profilesRh-placeholder" name="email" id="email" placeholder="* EMAIL" required data-validation-required-message = "Please enter your email address">
        <p class="help-block text-danger"></p>
    </div>
    <div class="form-group">
        <input type="text" class="form-control profilesRh-placeholder" name="phone" id="phone" placeholder="* PHONE NUMBER" required data-validation-required-message = "Please enter your phone number" >
        <p class="help-block text-danger"></p>
    </div>
    <div class="form-group">
        <textarea class="form-control profilesRh-placeholder" id="message" name="message" placeholder="* ENTER YOUR INQUIRY *" required data-validation-required-message ="Please enter your inquiry message" rows="6"></textarea>
        <p class="help-block text-danger"></p>
    </div>
    <div class="form-group">
        <div class="g-recaptcha" data-sitekey="6LdSrVkUAAAAADn-PC7lkgHlyCez4wmmgzOfp7J-"></div>
    </div>
    <div id="success"></div>
    <button id="profilesRhBtn" class="btn text-uppercase" type="submit">Submit</button>
</form>