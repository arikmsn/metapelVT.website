export default function ContactForm() {
  const zohoFormHtml = `
<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white;color: black;max-width: 600px;'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <meta httpEquiv='content-type' content='text/html;charset=UTF-8' />
  <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js'></script>
  <style>
    .wf_customMessageBox{font-family: Arial, Helvetica, sans-serif;color: #132C14;background: #F5FAF5;box-shadow: 0 2px 6px 0 rgba(0,0,0,0.25);max-width: 90%;width: max-content;word-break: break-word;z-index: 11000;border-radius: 6px;border: 1px solid #A9D3AB;min-width: 100px;padding: 10px 15px;display: flex;align-items: center;position: fixed;top: 20px;left: 50%;transform: translate(-50%, 0);}
    .wf_customCircle{position: relative;background-color: #12AA67;border-radius: 100%;width: 20px;height: 20px;flex: none;margin-right: 7px;}
    .wf_customCheckMark{box-sizing: unset !important;position: absolute;transform: rotate(45deg)translate(-50%, -50%);left: 6px;top: 9px;height: 8px;width: 3px;border-bottom: 2px solid #fff;border-right: 2px solid #fff;}
    .wf_customClose{box-sizing: border-box;position: relative;width: 18px;height: 18px;}
    .wf_customClose::after,.wf_customClose::before{content: '';display: block;box-sizing: border-box;position: absolute;width: 12px;height: 1.5px;background: #616E88;transform: rotate(45deg);border-radius: 5px;top: 8px;left}
    .wf_customClose::after{transform: rotate(-45deg)}
    html,body{margin: 0px;}
    .formsubmit.zcwf_button{color: white !important;background: transparent linear-gradient(0deg, #0279FF 0%, #00A3F3 100%);}
    #crmWebToEntityForm.zcwf_lblLeft{width: 100%;padding: 25px;margin: 0 auto;box-sizing: border-box;}
    #crmWebToEntityForm.zcwf_lblLeft *{box-sizing: border-box;}
    #crmWebToEntityForm {text-align: left;}
    #crmWebToEntityForm *{direction: ltr;}
    .zcwf_lblLeft .zcwf_title{word-wrap: break-word;padding: 0px 6px 10px;font-weight: bold}
    .zcwf_lblLeft.cpT_primaryBtn:hover{background: linear-gradient(#02acff 0,#006be4 100%)no-repeat padding-box !important;box-shadow: 0 -2px 0 0 #0159b9 inset !important;border: 0 !important;color: #fff !important;outline: 0 !important;}
    .zcwf_lblLeft .zcwf_col_fld input[type=text], input[type=password], .zcwf_lblLeft .zcwf_col_fld textarea{width: 60%;border: 1px solid #c0c6cc !important;resize: vertical;border-radius: 2px;float: left;}
    .zcwf_lblLeft .zcwf_col_lab{width: 30%;word-break: break-word;padding: 0px 6px 0px;margin-right: 10px;margin-top: 5px;float: left;min-height: 1px;}
    .zcwf_lblLeft .zcwf_col_fld{float: left;width: 68%;padding: 0px 6px 0px;position: relative;margin-top: 5px;}
    .zcwf_lblLeft .zcwf_privacy {padding: 6px;}
    .zcwf_lblLeft .wfrm_fld_dpNn {display: none;}
    .dIB {display: inline-block;}
    .zcwf_lblLeft .zcwf_col_fld_slt{width: 60%;border: 1px solid #ccc;background: #fff;border-radius: 4px;font-size: 12px;float: left;resize: vertical;padding: 2px 5px;}
    .zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after{content: '';display: table;clear: both;}
    .zcwf_lblLeft .zcwf_col_help{float: left;margin-left: 7px;font-size: 12px;max-width: 35%;word-break: break-word;}
    .zcwf_lblLeft .zcwf_help_icon{cursor: pointer;width: 16px;height: 16px;display: inline-block;background: #fff;border: 1px solid #c0c6cc;color: #c1c1c1;text-align: center;font-size: 11px;line-height: 16px;font-weight: bold;border-radius: 50%;}
    .zcwf_lblLeft .zcwf_row {margin: 15px 0px;}
    .zcwf_lblLeft .formsubmit{margin-right: 5px;cursor: pointer;color: #313949;font-size: 12px;}
    .zcwf_lblLeft .zcwf_privacy_txt{width: 90%;color: rgb(0, 0, 0);font-size: 12px;font-family: Arial;display: inline-block;vertical-align: top;color: #313949;padding-top: 2px;margin-left: 6px;}
    .zcwf_lblLeft .zcwf_button{font-size: 12px;color: #313949;border: 1px solid #c0c6cc;padding: 3px 9px;border-radius: 4px;cursor: pointer;max-width: 120px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .zcwf_lblLeft .zcwf_tooltip_over{position: relative;}
    .zcwf_lblLeft .zcwf_tooltip_ctn{position: absolute;background: #dedede;padding: 3px 6px;top: 3px;border-radius: 4px;word-break: break-word;min-width: 100px;max-width: 150px;color: #313949;z-index: 100;}
    .zcwf_lblLeft .zcwf_ckbox{float: left;}
    .zcwf_lblLeft .zcwf_file{width: 55%;box-sizing: border-box;float: left;}
    .cBoth:after{content: '';display: block;clear: both;}
    @media all and (max-width: 600px){.zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld{width: auto;float: none !important;}.zcwf_lblLeft .zcwf_col_help {width: 40%;}}
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
    <div class='zcwf_title' style='max-width: 600px;color: black; font-family:Arial;'>Metapel Website Contact</div>
    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Last_Name'>שם מלא<span style='color:red;'>*</span></label></div>
      <div class='zcwf_col_fld'><input type='text' id='Last_Name' aria-required='true' aria-label='Last Name' name='Last Name' aria-valuemax='80' maxlength='80'><div class='zcwf_col_help'></div></div>
    </div>
    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Email'>מייל<span style='color:red;'>*</span></label></div>
      <div class='zcwf_col_fld'><input type='text' ftype='email' autocomplete='false' id='Email' aria-required='true' aria-label='Email' name='Email' aria-valuemax='100' crmlabel='' maxlength='100'><div class='zcwf_col_help'></div></div>
    </div>
    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Phone'>טלפון</label></div>
      <div class='zcwf_col_fld'><input type='text' id='Phone' aria-required='false' aria-label='Phone' name='Phone' aria-valuemax='30' maxlength='30'><div class='zcwf_col_help'></div></div>
    </div>
    <div class='zcwf_row wfrm_fld_dpNn'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Lead_Source'>Lead Source</label></div>
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
        <div class='zcwf_col_help'></div>
      </div>
    </div>
    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Description'>תיאור הפנייה</label></div>
      <div class='zcwf_col_fld'><textarea style='font-family: Arial, sans-serif;' aria-multiline='true' id='Description' aria-required='false' aria-label='Description' name='Description'></textarea><div class='zcwf_col_help'></div></div>
    </div>
    <input type='text' type='hidden' style='display: none;' name='aG9uZXlwb3Q' value='' />
    <div class='zcwf_row'>
      <div class='zcwf_col_lab'></div>
      <div class='zcwf_col_fld'>
        <input type='submit' id='formsubmit' role='button' class='formsubmit zcwf_button' value='שליחה' aria-label='שליחה' title='שליחה'>
        <input type='reset' class='zcwf_button' role='button' name='reset' value='איפוס' aria-label='איפוס' title='איפוס'>
      </div>
    </div>
    <script>
      function addAriaSelected4583015000000689066(){var optionElem=event.target;var previousSelectedOption=optionElem.querySelector('[aria-selected=true]');if(previousSelectedOption){previousSelectedOption.removeAttribute('aria-selected');}optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected='true';}
      function validateEmail4583015000000689066(){var form=document.forms['WebToLeads4583015000000689066'];var emailFld=form.querySelectorAll('[ftype=email]');var i;for(i=0;i<emailFld.length;i++){var emailVal=emailFld[i].value;if((emailVal.replace(/^\\s+|\\s+$/g,'')).length!=0){var atpos=emailVal.indexOf('@');var dotpos=emailVal.lastIndexOf('.');if(atpos<1||dotpos<atpos+2||dotpos+2>=emailVal.length){alert('Please enter a valid email address. ');emailFld[i].focus();return false;}}}return true;}
      function checkMandatory4583015000000689066(){var mndFileds=new Array('Last Name','Email');var fldLangVal=new Array('שם מלא','מייל');for(i=0;i<mndFileds.length;i++){var fieldObj=document.forms['WebToLeads4583015000000689066'][mndFileds[i]];if(fieldObj){if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'')).length==0){if(fieldObj.type=='file'){alert('Please select a file to upload.');fieldObj.focus();return false;}alert(fldLangVal[i]+' cannot be empty.');fieldObj.focus();return false;}else if(fieldObj.nodeName=='SELECT'){if(fieldObj.options[fieldObj.selectedIndex].value=='-None-'){alert(fldLangVal[i]+' cannot be none.');fieldObj.focus();return false;}}else if(fieldObj.type=='checkbox'){if(fieldObj.checked==false){alert('Please accept '+fldLangVal[i]);fieldObj.focus();return false;}}try{if(fieldObj.name=='Last Name'){name=fieldObj.value;}}catch(e){}}}if(!validateEmail4583015000000689066()){return false;}var urlparams=new URLSearchParams(window.location.search);if(urlparams.has('service')&&(urlparams.get('service')==='smarturl')){var webform=document.getElementById('webform4583015000000689066');var service=urlparams.get('service');var smarturlfield=document.createElement('input');smarturlfield.setAttribute('type','hidden');smarturlfield.setAttribute('value',service);smarturlfield.setAttribute('name','service');webform.appendChild(smarturlfield);}document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled',true);return true;}
      $(document).ready(function(){$('#webform4583015000000689066').submit(function(e){var ismandatory=checkMandatory4583015000000689066();e.preventDefault();if(ismandatory){if(typeof _wfa_track!='undefined'&&_wfa_track.wfa_submit){_wfa_track.wfa_submit(e);}var formData=new FormData(this);$.ajax({url:'https://crm.zoho.com/crm/WebToLeadForm',type:'POST',data:formData,cache:false,contentType:false,processData:false,success:function(data){var splashinfodom=document.getElementById('wf_splash_info');splashinfodom.innerText=data.actionvalue;var splashdom=document.getElementById('wf_splash');document.getElementById('webform4583015000000689066').reset.click();splashdom.style.display='';setTimeout(function(){splashdom.style.display='none';},5000);document.querySelector('.crmWebToEntityForm .formsubmit').removeAttribute('disabled');},error:function(data){alert('an error occurred');}});}});});
      function tooltipShow4583015000000689066(el){var tooltip=el.nextElementSibling;var tooltipDisplay=tooltip.style.display;if(tooltipDisplay=='none'){var allTooltip=document.getElementsByClassName('zcwf_tooltip_over');for(i=0;i<allTooltip.length;i++){allTooltip[i].style.display='none';}tooltip.style.display='block';}else{tooltip.style.display='none';}}
    </script>
  </form>
</div>
`;

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          צור קשר
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-12">
          השאירו פרטים ונחזור אליכם בהקדם
        </p>
        <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: zohoFormHtml }} />
      </div>
    </section>
  );
}
