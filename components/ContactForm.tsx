export default function ContactForm() {
  const zohoFormHtml = `
<div class="contact-form-wrapper" dir="rtl" style="max-width: 600px; margin: 0 auto; padding: 0;">
='crmWeb  <div idToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white; color: black; max-width: 600px; width: 100%; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); overflow: hidden;'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js'></script>
    <style>
      .contact-form-wrapper .wf_customMessageBox{font-family: Arial, Helvetica, sans-serif;color: #132C14;background: #F5FAF5;box-shadow: 0 2px 6px 0 rgba(0,0,0,0.25);max-width: 90%;width: max-content;word-break: break-word;z-index: 11000;border-radius: 6px;border: 1px solid #A9D3AB;min-width: 100px;padding: 10px 15px;display: flex;align-items: center;position: fixed;top: 20px;left: 50%;transform: translate(-50%, 0);direction: rtl;}
      .contact-form-wrapper .wf_customCircle{position: relative;background-color: #12AA67;border-radius: 100%;width: 20px;height: 20px;flex: none;margin-right: 7px;}
      .contact-form-wrapper .wf_customCheckMark{box-sizing: unset !important;position: absolute;transform: rotate(45deg)translate(-50%, -50%);left: 6px;top: 9px;height: 8px;width: 3px;border-bottom: 2px solid #fff;border-right: 2px solid #fff;}
      .contact-form-wrapper .wf_customClose{box-sizing: border-box;position: relative;width: 18px;height: 18px;}
      .contact-form-wrapper .wf_customClose::after,.contact-form-wrapper .wf_customClose::before{content: '';display: block;box-sizing: border-box;position: absolute;width: 12px;height: 1.5px;background: #616E88;transform: rotate(45deg);border-radius: 5px;top: 8px;left}
      .contact-form-wrapper .wf_customClose::after{transform: rotate(-45deg)}
      
      /* RTL Overrides */
      .contact-form-wrapper{direction: rtl !important; text-align: right !important;}
      .contact-form-wrapper *{direction: rtl !important;}
      .contact-form-wrapper #crmWebToEntityForm{text-align: right !important;}
      .contact-form-wrapper #crmWebToEntityForm *{direction: rtl !important;}
      
      .contact-form-wrapper .zcwf_lblLeft .zcwf_title{display: none !important;}
      
      .contact-form-wrapper .zcwf_lblLeft .zcwf_row{margin: 20px 0; display: flex; flex-direction: column;}
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_lab{width: 100% !important; float: none !important; margin: 0 0 8px 0; padding: 0 !important; text-align: right;}
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_lab label{font-size: 14px; font-weight: 600; color: #374151; font-family: 'Heebo', -apple-system, BlinkMacSystemFont, sans-serif;}
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld{width: 100% !important; float: none !important; padding: 0 !important; margin: 0 !important;}
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld input[type=text],
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld input[type=email],
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld textarea{width: 100% !important; float: none !important; border: 1px solid #e5e7eb !important; border-radius: 8px !important; padding: 12px 14px !important; font-size: 14px !important; font-family: 'Heebo', -apple-system, BlinkMacSystemFont, sans-serif !important; background: #f9fafb !important; transition: all 0.2s ease !important;}
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld input[type=text]:focus,
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld input[type=email]:focus,
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld textarea:focus{outline: none !important; border-color: #0d9488 !important; box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1) !important; background: #fff !important;}
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld textarea{min-height: 100px; resize: vertical;}
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_help{display: none !important;}
      
      /* Submit Button */
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld .formsubmit.zcwf_button{
        width: 100% !important;
        max-width: 100% !important;
        padding: 14px 24px !important;
        font-size: 16px !important;
        font-weight: 600 !important;
        font-family: 'Heebo', -apple-system, BlinkMacSystemFont, sans-serif !important;
        background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%) !important;
        color: white !important;
        border: none !important;
        border-radius: 12px !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        text-align: center !important;
      }
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld .formsubmit.zcwf_button:hover{
        background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 20px rgba(13, 148, 136, 0.3) !important;
      }
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld .formsubmit.zcwf_button:disabled{
        background: #9ca3af !important;
        cursor: not-allowed !important;
        transform: none !important;
        box-shadow: none !important;
      }
      
      /* Hide reset button */
      .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld input[type=reset]{display: none !important;}
      
      /* Hidden fields row */
      .contact-form-wrapper .wfrm_fld_dpNn{display: none !important;}
      
      /* Mobile */
      @media (max-width: 640px) {
        .contact-form-wrapper{padding: 0 16px !important;}
        .contact-form-wrapper #crmWebToEntityForm{padding: 24px !important; border-radius: 12px !important;}
        .contact-form-wrapper .zcwf_lblLeft .zcwf_row{margin: 16px 0 !important;}
        .contact-form-wrapper .zcwf_lblLeft .zcwf_col_lab label{font-size: 13px !important;}
        .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld input[type=text],
        .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld input[type=email],
        .contact-form-wrapper .zcwf_lblLeft .zcwf_col_fld textarea{padding: 12px !important; font-size: 14px !important;}
      }
    </style>
    <div class='wf_customMessageBox' id='wf_splash' style='display:none'>
      <div class='wf_customCircle'><div class='wf_customCheckMark'></div></div>
      <span id='wf_splash_info'></span>
    </div>
    <form id='webform4583015000000689066' name='WebToLeads4583015000000689066' accept-charset='UTF-8'>
      <input type='text' style='display:none;' name='xnQsjsdp' value='aeb2a0088650c88412cef1a97bcb10cb4852db23477cede8466da0921117cd40'>
      <input type='hidden' name='zc_gad' id='zc_gad' value=''>
      <input type='text' style='display:none;' name='xmIwtLD' value='4fff1be45a541a39333585adc2833b0dd6f78c877e75caaabb752866d7fc13be636b93311c7d1cc155df2dd234df6b05'>
      <input type='text' style='display:none;' name='actionType' value='TGVhZHM='>
      <input type='text' style='display:none;' name='returnURL' value='null'>
      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='Last_Name'>שם מלא<span style='color:red;'> *</span></label></div>
        <div class='zcwf_col_fld'><input type='text' id='Last_Name' aria-required='true' aria-label='שם מלא' name='Last Name' aria-valuemax='80' maxlength='80' placeholder='השם המלא שלך'></div>
      </div>
      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='Email'>דוא"ל<span style='color:red;'> *</span></label></div>
        <div class='zcwf_col_fld'><input type='text' ftype='email' autocomplete='false' id='Email' aria-required='true' aria-label='דוא"ל' name='Email' aria-valuemax='100' crmlabel='' maxlength='100' placeholder='האימייל שלך'></div>
      </div>
      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='Phone'>טלפון</label></div>
        <div class='zcwf_col_fld'><input type='text' id='Phone' aria-required='false' aria-label='טלפון' name='Phone' aria-valuemax='30' maxlength='30' placeholder='מספר הטלפון שלך'></div>
      </div>
      <div class='zcwf_row wfrm_fld_dpNn'>
        <div class='zcwf_col_lab'><label for='Lead_Source'>Lead Source</label></div>
        <div class='zcwf_col_fld'>
          <select class='zcwf_col_fld_slt' role='combobox' aria-expanded='false' aria-haspopup='listbox' id='Lead_Source' onchange='addAriaSelected4583015000000689066()' aria-required='false' aria-label='Lead Source' name='Lead Source'>
            <option value='-None-'>-None-</option>
            <option value='פרסום'>פרסום</option>
            <option value='קישור הקרה'>קישור הקרה</option>
            <option value='הפנייה עובד'>הפנייה עובד</option>
            <option value='הפנייה חינוכית'>הפנייה חינוכית</option>
            <option value='חנות מקוונת'>חנות מקוונת</option>
            <option value='שיתופי פעולה'>שיתופי פעולה</option>
            <option value='יחסי ציבור'>יחסי ציבור</option>
            <option value='כנסים'>כנסים</option>
            <option value='דירוג מנוע חיפוש'>דירוג מנוע חיפוש</option>
            <option value='בלוג'>בלוג</option>
            <option value='פייסבוק'>פייסבוק</option>
            <option value='לינקדאין'>לינקדאין</option>
            <option value='טוויטר'>טוויטר</option>
            <option value='מחקר מקורי'>מחקר מקורי</option>
            <option value='וידאו'>וידאו</option>
            <option value='ציטוט'>ציטוט</option>
            <option selected value='אתר'>אתר</option>
            <option value='Online Store'>Online Store</option>
          </select>
        </div>
      </div>
      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='Description'>הודעה</label></div>
        <div class='zcwf_col_fld'><textarea style='font-family: Arial, sans-serif;' aria-multiline='true' id='Description' aria-required='false' aria-label='הודעה' name='Description' placeholder='איך נוכל לעזור לך?'></textarea></div>
      </div>
      <input type='text' type='hidden' style='display: none;' name='aG9uZXlwb3Q' value='' />
      <div class='zcwf_row'>
        <div class='zcwf_col_lab'></div>
        <div class='zcwf_col_fld'>
          <input type='submit' id='formsubmit' role='button' class='formsubmit zcwf_button' value='שליחה' aria-label='שליחה' title='שליחה'>
        </div>
      </div>
      <script>
        function addAriaSelected4583015000000689066(){var optionElem=event.target;var previousSelectedOption=optionElem.querySelector('[aria-selected=true]');if(previousSelectedOption){previousSelectedOption.removeAttribute('aria-selected');}optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected='true';}
        function validateEmail4583015000000689066(){var form=document.forms['WebToLeads4583015000000689066'];var emailFld=form.querySelectorAll('[ftype=email]');var i;for(i=0;i<emailFld.length;i++){var emailVal=emailFld[i].value;if((emailVal.replace(/^\\s+|\\s+$/g,'')).length!=0){var atpos=emailVal.indexOf('@');var dotpos=emailVal.lastIndexOf('.');if(atpos<1||dotpos<atpos+2||dotpos+2>=emailVal.length){alert('Please enter a valid email address. ');emailFld[i].focus();return false;}}}return true;}
        function checkMandatory4583015000000689066(){var mndFileds=new Array('Last Name','Email');var fldLangVal=new Array('שם מלא','דוא"ל');for(i=0;i<mndFileds.length;i++){var fieldObj=document.forms['WebToLeads4583015000000689066'][mndFileds[i]];if(fieldObj){if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'')).length==0){if(fieldObj.type=='file'){alert('Please select a file to upload.');fieldObj.focus();return false;}alert(fldLangVal[i]+' השדה הינו חובה');fieldObj.focus();return false;}else if(fieldObj.nodeName=='SELECT'){if(fieldObj.options[fieldObj.selectedIndex].value=='-None-'){alert(fldLangVal[i]+' cannot be none.');fieldObj.focus();return false;}}else if(fieldObj.type=='checkbox'){if(fieldObj.checked==false){alert('Please accept '+fldLangVal[i]);fieldObj.focus();return false;}}try{if(fieldObj.name=='Last Name'){name=fieldObj.value;}}catch(e){}}}if(!validateEmail4583015000000689066()){return false;}var urlparams=new URLSearchParams(window.location.search);if(urlparams.has('service')&&(urlparams.get('service')==='smarturl')){var webform=document.getElementById('webform4583015000000689066');var service=urlparams.get('service');var smarturlfield=document.createElement('input');smarturlfield.setAttribute('type','hidden');smarturlfield.setAttribute('value',service);smarturlfield.setAttribute('name','service');webform.appendChild(smarturlfield);}document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled',true);return true;}
        $(document).ready(function(){$('#webform4583015000000689066').submit(function(e){var ismandatory=checkMandatory4583015000000689066();e.preventDefault();if(ismandatory){if(typeof _wfa_track!='undefined'&&_wfa_track.wfa_submit){_wfa_track.wfa_submit(e);}var formData=new FormData(this);$.ajax({url:'https://crm.zoho.com/crm/WebToLeadForm',type:'POST',data:formData,cache:false,contentType:false,processData:false,success:function(data){var splashinfodom=document.getElementById('wf_splash_info');splashinfodom.innerText='תודה! ההודעה נשלחה בהצלחה';var splashdom=document.getElementById('wf_splash');document.getElementById('webform4583015000000689066').reset.click();splashdom.style.display='';setTimeout(function(){splashdom.style.display='none';},5000);document.querySelector('.crmWebToEntityForm .formsubmit').removeAttribute('disabled');},error:function(data){alert('אירעה שגיאה, נסה שוב מאוחר יותר');}});}});});
        function tooltipShow4583015000000689066(el){var tooltip=el.nextElementSibling;var tooltipDisplay=tooltip.style.display;if(tooltipDisplay=='none'){var allTooltip=document.getElementsByClassName('zcwf_tooltip_over');for(i=0;i<allTooltip.length;i++){allTooltip[i].style.display='none';}tooltip.style.display='block';}else{tooltip.style.display='none';}}
      </script>
    </form>
  </div>
</div>
`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-3">
          צור קשר
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-12">
          השאירו פרטים ונחזור אליכם בהקדם
        </p>
        <div dangerouslySetInnerHTML={{ __html: zohoFormHtml }} />
      </div>
    </section>
  );
}
