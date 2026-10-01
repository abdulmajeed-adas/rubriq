/* Shared script for every Rubriq page: translations, language switch, nav menu, and the
   booking / output-tab / mailto helpers. Each helper checks for its elements, so pages
   only get the behavior for what they contain. */
  var translations = {
    en: {
      brand:"Rubriq",
      navSolutions:"Solutions",
      navCta:"Book a demo",
      eyebrow:"Assess / Analyze / Develop",
      h1:"Turn any rubric into a self-writing report.",
      lede:"Rubriq is an AI solutions agency that builds automated assessment-to-report platforms for consulting practices. Plug in your framework — audits, quality reviews, accreditation checklists, compliance scorecards — and we turn raw scores and evidence into a finished, data-grounded report and action plan. No more nights spent writing the same report structure by hand.",
      scopeNote:"We build and run the platform. Your team keeps the assessments, the judgment calls, and the client relationships.",
      heroBtn1:"Book a call →",
      heroBtn2:"See it in action",
      baKicker:"Before / With Rubriq",
      baH2:"Same methodology. Far less manual work.",
      baSub:"Keep your framework. Remove the spreadsheet chaos, back-and-forth emails, and manual report writing.",
      baWithoutKicker:"Without Rubriq",
      baWithoutP:"A fragmented, manual process across multiple tools and people.",
      baS1h:"Spreadsheet", baS1p:"Manage framework in spreadsheets",
      baS2h:"Emails", baS2p:"Endless back-and-forth",
      baS3h:"Evidence", baS3p:"Gather and organize files",
      baS4h:"Manual scoring", baS4p:"Consolidate and calculate",
      baS5h:"Word report", baS5p:"Write and format report",
      baS6h:"Excel plan", baS6p:"Create separate development plan",
      baWithoutFoot:"2–3 days of consultant work",
      baWithKicker:"With Rubriq",
      baWithP:"One integrated platform. The same methodology, delivered effortlessly.",
      baFwH:"Your Framework", baFwP:"Bring your existing rubric or build in Rubriq",
      baC1:"Collect responses from your team",
      baC2:"Analyze results and identify insights",
      baC3:"Generate polished, evidence-based reports",
      baC4:"Turn insights into actionable plans",
      baWithFoot:"Minutes, not days",
      meKicker:"Built around your methodology",
      meH2:"Your methodology stays yours.<br>Your knowledge and voice do too.",
      meSub:"Rubriq maps your framework, knowledge base, and reporting style into a repeatable digital workflow — without changing how you score, review, or deliver.",
      meChip1:"Domains", meChip2:"Criteria", meChip3:"Weights",
      meChip4:"Scoring Scale", meChip5:"Knowledge Base", meChip6:"Voice & Tone",
      meLabelFw:"Your framework",
      meEngine:"Methodology engine",
      meLabelMid:"We map, configure, and launch",
      meLabelOut:"Your Rubriq outputs",
      meO1h:"Assessment Portal", meO1p:"Guided scoring experience for your team or clients.",
      meO2h:"Consultant Review Dashboard", meO2p:"A centralized view to monitor, adjust, and finalize scores.",
      meO3h:"Automated Client Reports", meO3p:"Polished, on-brand reports generated from approved assessment data, your knowledge base, and your reporting style.",
      meO4h:"Development Plan", meO4p:"Actionable next steps tailored to your framework.",
      noKicker:"See the output",
      noH2:"Not another dashboard.<br>A finished client deliverable.",
      noSub:"Everything comes from the same assessment data — from evidence collection to polished reports and development plans.",
      noTab1:"Assessment", noTab2:"Report", noTab3:"Development Plan",
      noAlt1:"Sample completed assessment with overall score, domain scores, evidence highlights, and score breakdown",
      noAlt2:"Sample Leadership Assessment Report cover with participants, competency areas, and recommendations",
      noAlt3:"Sample Leadership Development Plan with three focus areas",
      noF1h:"Criterion + score + evidence", noF1p:"Transparent, defensible, and complete.",
      noF2h:"Executive summary + domain analysis", noF2p:"Turn assessments into client-ready reports.",
      noF3h:"Priorities + actions + timeline", noF3p:"Translate insight into measurable growth.",
      howMore:"Learn more about how it works",
      howKicker:"How it works",
      howH2:"One framework in, a finished report out.",
      step1h:"Load your framework", step1p:"Domains, criteria, weights, and a maturity or scoring scale — modeled once, reused every cycle.",
      step2h:"Clients self-assess", step2p:"A guided scoring form per criterion, with evidence uploads and space for supporting notes.",
      step3h:"Consultant reviews", step3p:"A dashboard to confirm or adjust every score before anything gets generated.",
      step4h:"AI generates the report", step4p:"Polished narrative reports and development plans, generated automatically from approved scores, evidence, and consultant feedback.",
      proofKicker:"Proof, not a prototype",
      proofH2:"Already running<br>in production.",
      proofP:"Rubriq powers a live multi-partner assessment program, turning a structured framework into client reports and development plans in minutes.",
      pr1n:"54", pr1l:"indicators", pr2n:"3", pr2l:"assessment domains",
      pr3n:"Multiple", pr3l:"partner organizations", pr4n:"Minutes", pr4l:"to generate reports",
      prBtn:"View example report",
      prAlt:"Sample client report pages: overall results, the report cover, key insights, and a development plan",
      ctaKicker:"Get started",
      ctaH2:"See Rubriq running<br>on your own framework.",
      ctaP:"Send us the spreadsheet, rubric, scorecard, or assessment methodology you already use, and we'll show you what the automated version could look like.",
      ctaBtn1:"Book a demo", ctaBtn2:"Send your framework",
      foot1:"Rubriq — an AI solutions agency building assessment-to-report platforms for consulting teams.",
      foot2:"Case study available on request.",
      bookH3:"Book a call",
      bookSub:"Pick a time below — everything is shown in your own local time.",
      tzNote:"Times shown in your timezone ({tz}). Available 8:00 AM – 1:00 AM Riyadh time.",
      noSlots:"No times left for this day — try another day.",
      selectedSlotPrefix:"Selected:",
      bookNamePh:"Your name",
      bookEmailPh:"Your email",
      bookNotePh:"Anything you'd like to share (optional)",
      bookSendEmail:"Request via email",
      bookSendWa:"Request via WhatsApp",
      bookDisclaimer:"This sends a request, not an automatic booking — we'll confirm the time back with you.",
      contactH3:"Or just send a message",
      cfNamePh:"Name",
      cfEmailPh:"Email",
      cfCompanyPh:"Company (optional)",
      cfMessagePh:"Message",
      cfSend:"Send message",
      cfNote:"Opens your email app with this pre-filled — nothing is sent without you hitting send.",
      navHome:"Home", navHow:"How It Works", navReport:"Example Report", navSecurity:"Security & Trust", navLogin:"Login", navMenu:"Menu",
      footPrivacy:"Privacy Policy", footTerms:"Terms of Service",
      solKicker:"Use cases", solH1:"Solutions & use cases",
      solP:"The same engine adapts to audits, quality reviews, accreditation cycles, or any structured evaluation your practice runs.",
      solNote:"Detailed use cases are coming soon.",
      secKicker:"Security", secH1:"Security & trust",
      secP:"How Rubriq handles, stores, and protects your assessment data and your clients' evidence.",
      secNote:"Full details are coming soon. In the meantime, we're happy to answer any security question directly.",
      legalKicker:"Legal",
      privH1:"Privacy Policy", privP:"Our privacy policy is being finalized and will be published here soon.",
      termsH1:"Terms of Service", termsP:"Our terms of service are being finalized and will be published here soon.",
      legalNote:"Questions in the meantime? Email us at <a href=\"mailto:adas.abdulmajeed@gmail.com\">adas.abdulmajeed@gmail.com</a>.",
      langBtn:"العربية"
    },
    ar: {
      brand:"روبريك",
      navSolutions:"الحلول",
      navCta:"احجز عرضًا توضيحيًا",
      eyebrow:"تقييم / تحليل / تطوير",
      h1:"حوّل أي إطار تقييم إلى تقرير يُكتب تلقائيًا.",
      lede:"روبريك وكالة حلول ذكاء اصطناعي تبني منصات تحوّل التقييم إلى تقرير جاهز لصالح الممارسات الاستشارية. أدخل إطارك — تدقيق، مراجعة جودة، معايير اعتماد، أو بطاقة امتثال — ونحوّله من درجات وبيّنات خام إلى تقرير متكامل مبني على البيانات وخطة عمل جاهزة. لا مزيد من الليالي التي تُمضى في كتابة نفس هيكل التقرير يدويًا.",
      scopeNote:"نحن نبني المنصة ونُشغّلها. التقييم والقرارات الاحترافية وعلاقات العملاء تبقى بين يدي فريقك.",
      heroBtn1:"احجز مكالمة ←",
      heroBtn2:"شاهد كيف تعمل",
      baKicker:"قبل / مع روبريك",
      baH2:"نفس المنهجية. عمل يدوي أقل بكثير.",
      baSub:"احتفظ بإطارك، وتخلّص من فوضى جداول البيانات والمراسلات المتكررة وكتابة التقارير يدويًا.",
      baWithoutKicker:"بدون روبريك",
      baWithoutP:"عملية مجزّأة ويدوية عبر أدوات وأشخاص متعددين.",
      baS1h:"جداول البيانات", baS1p:"إدارة الإطار في جداول بيانات",
      baS2h:"البريد الإلكتروني", baS2p:"مراسلات لا تنتهي",
      baS3h:"البيّنات", baS3p:"جمع الملفات وتنظيمها",
      baS4h:"التقييم اليدوي", baS4p:"تجميع الدرجات وحسابها",
      baS5h:"تقرير وورد", baS5p:"كتابة التقرير وتنسيقه",
      baS6h:"خطة إكسل", baS6p:"إعداد خطة تطوير منفصلة",
      baWithoutFoot:"2–3 أيام من عمل الاستشاري",
      baWithKicker:"مع روبريك",
      baWithP:"منصة واحدة متكاملة. نفس المنهجية، تُنفَّذ بسلاسة.",
      baFwH:"إطارك", baFwP:"استخدم معاييرك الحالية أو ابنِها داخل روبريك",
      baC1:"اجمع الإجابات من فريقك",
      baC2:"حلّل النتائج واستخرج الرؤى",
      baC3:"أنشئ تقارير احترافية مبنية على البيّنات",
      baC4:"حوّل الرؤى إلى خطط قابلة للتنفيذ",
      baWithFoot:"دقائق، لا أيام",
      meKicker:"مبنية حول منهجيتك",
      meH2:"منهجيتك تبقى لك.<br>ومعرفتك وأسلوبك كذلك.",
      meSub:"يحوّل روبريك إطارك وقاعدة معرفتك وأسلوب تقاريرك إلى سير عمل رقمي قابل للتكرار — دون تغيير طريقة التقييم أو المراجعة أو التسليم.",
      meChip1:"المجالات", meChip2:"المعايير", meChip3:"الأوزان",
      meChip4:"مقياس التقييم", meChip5:"قاعدة المعرفة", meChip6:"الأسلوب والنبرة",
      meLabelFw:"إطارك",
      meEngine:"محرك المنهجية",
      meLabelMid:"نحوّله ونُعدّه ونُطلقه",
      meLabelOut:"مخرجاتك في روبريك",
      meO1h:"بوابة التقييم", meO1p:"تجربة تقييم موجّهة لفريقك أو عملائك.",
      meO2h:"لوحة مراجعة الاستشاري", meO2p:"عرض مركزي لمتابعة الدرجات وتعديلها واعتمادها.",
      meO3h:"تقارير عملاء مؤتمتة", meO3p:"تقارير احترافية بهويتك تُولَّد من بيانات التقييم المعتمدة وقاعدة معرفتك وأسلوب تقاريرك.",
      meO4h:"خطة التطوير", meO4p:"خطوات تالية قابلة للتنفيذ ومصمّمة لإطارك.",
      noKicker:"شاهد النتيجة",
      noH2:"ليست لوحة تحكم أخرى.<br>بل مُخرَج نهائي جاهز للعميل.",
      noSub:"كل شيء ينبع من بيانات التقييم نفسها — من جمع البيّنات إلى التقارير الاحترافية وخطط التطوير.",
      noTab1:"التقييم", noTab2:"التقرير", noTab3:"خطة التطوير",
      noAlt1:"نموذج تقييم مكتمل يعرض الدرجة الإجمالية ودرجات المجالات وأبرز البيّنات وتفصيل الدرجات",
      noAlt2:"غلاف نموذج لتقرير تقييم القيادة يعرض المشاركين ومجالات الكفاءة والتوصيات",
      noAlt3:"نموذج لخطة تطوير القيادة بثلاثة مجالات تركيز",
      noF1h:"المعيار + الدرجة + البيّنة", noF1p:"شفاف، وقابل للدفاع عنه، ومتكامل.",
      noF2h:"ملخص تنفيذي + تحليل المجالات", noF2p:"حوّل التقييمات إلى تقارير جاهزة للعميل.",
      noF3h:"الأولويات + الإجراءات + الجدول الزمني", noF3p:"حوّل الرؤى إلى نمو قابل للقياس.",
      howMore:"اعرف المزيد عن طريقة العمل",
      howKicker:"كيف تعمل",
      howH2:"إطار تقييم واحد يدخل، تقرير جاهز يخرج.",
      step1h:"حمّل إطارك", step1p:"المجالات والمعايير والأوزان ومقياس التقييم — يُبنى مرة واحدة ويُعاد استخدامه كل دورة.",
      step2h:"العملاء يقيّمون أنفسهم", step2p:"نموذج تقييم موجّه لكل معيار، مع رفع البيّنات ومساحة للملاحظات الداعمة.",
      step3h:"الاستشاري يراجع", step3p:"لوحة تحكم لتأكيد أو تعديل كل درجة قبل توليد أي شيء.",
      step4h:"الذكاء الاصطناعي يُولّد التقرير", step4p:"تقارير سردية احترافية وخطط تطوير، تُولَّد تلقائيًا من الدرجات المعتمدة والبيّنات وملاحظات الاستشاري.",
      proofKicker:"دليل حقيقي، لا نموذج أولي",
      proofH2:"يعمل بالفعل<br>في بيئة الإنتاج.",
      proofP:"يشغّل روبريك برنامج تقييم حيًّا متعدد الشركاء، ويحوّل إطارًا منظمًا إلى تقارير للعملاء وخطط تطوير خلال دقائق.",
      pr1n:"54", pr1l:"مؤشرًا", pr2n:"3", pr2l:"مجالات تقييم",
      pr3n:"متعددة", pr3l:"جهات شريكة", pr4n:"دقائق", pr4l:"لإصدار التقارير",
      prBtn:"اطّلع على نموذج تقرير",
      prAlt:"صفحات نموذج تقرير للعميل: النتائج العامة وغلاف التقرير وأبرز الرؤى وخطة التطوير",
      ctaKicker:"ابدأ الآن",
      ctaH2:"شاهد روبريك يعمل<br>على إطارك الخاص.",
      ctaP:"أرسل لنا جدول البيانات أو إطار التقييم أو بطاقة الأداء أو منهجية التقييم التي تستخدمها حاليًا، وسنريك كيف يمكن أن تبدو النسخة المؤتمتة.",
      ctaBtn1:"احجز عرضًا توضيحيًا", ctaBtn2:"أرسل إطارك",
      foot1:"روبريك — وكالة حلول ذكاء اصطناعي تبني منصات تحويل التقييم إلى تقرير لفرق الاستشارات.",
      foot2:"دراسة حالة متاحة عند الطلب.",
      bookH3:"احجز مكالمة",
      bookSub:"اختر وقتًا أدناه — كل الأوقات معروضة بتوقيتك المحلي.",
      tzNote:"الأوقات معروضة بتوقيتك ({tz}). التوفر من 8:00 صباحًا حتى 1:00 صباحًا بتوقيت الرياض.",
      noSlots:"لا توجد أوقات متاحة في هذا اليوم — جرّب يومًا آخر.",
      selectedSlotPrefix:"الوقت المختار:",
      bookNamePh:"اسمك",
      bookEmailPh:"بريدك الإلكتروني",
      bookNotePh:"أي شيء تود مشاركته (اختياري)",
      bookSendEmail:"إرسال الطلب عبر البريد",
      bookSendWa:"إرسال الطلب عبر واتساب",
      bookDisclaimer:"هذا يرسل طلب حجز وليس حجزًا تلقائيًا — سنؤكد لك الوقت لاحقًا.",
      contactH3:"أو أرسل رسالة مباشرة",
      cfNamePh:"الاسم",
      cfEmailPh:"البريد الإلكتروني",
      cfCompanyPh:"الجهة (اختياري)",
      cfMessagePh:"الرسالة",
      cfSend:"إرسال الرسالة",
      cfNote:"سيفتح تطبيق البريد لديك مع تعبئة الرسالة مسبقًا — لن يُرسل شيء دون أن تضغط إرسال بنفسك.",
      navHome:"الرئيسية", navHow:"كيف تعمل", navReport:"نموذج تقرير", navSecurity:"الأمان والثقة", navLogin:"تسجيل الدخول", navMenu:"القائمة",
      footPrivacy:"سياسة الخصوصية", footTerms:"شروط الخدمة",
      solKicker:"حالات الاستخدام", solH1:"الحلول وحالات الاستخدام",
      solP:"نفس المحرك يتكيف مع التدقيق، ومراجعات الجودة، ودورات الاعتماد، أو أي تقييم منظم تديره ممارستك.",
      solNote:"تفاصيل حالات الاستخدام قريبًا.",
      secKicker:"الأمان", secH1:"الأمان والثقة",
      secP:"كيف يتعامل روبريك مع بيانات التقييم وبيّنات عملائك ويخزّنها ويحميها.",
      secNote:"التفاصيل الكاملة قريبًا. وحتى ذلك الحين، يسعدنا الإجابة عن أي سؤال يتعلق بالأمان مباشرة.",
      legalKicker:"قانوني",
      privH1:"سياسة الخصوصية", privP:"نعمل على الصيغة النهائية لسياسة الخصوصية، وستُنشر هنا قريبًا.",
      termsH1:"شروط الخدمة", termsP:"نعمل على الصيغة النهائية لشروط الخدمة، وستُنشر هنا قريبًا.",
      legalNote:"لديك سؤال في الأثناء؟ راسلنا على <a href=\"mailto:adas.abdulmajeed@gmail.com\">adas.abdulmajeed@gmail.com</a>.",
      langBtn:"English"
    }
  };

  var currentLang = 'en';
  function setLang(lang){
    currentLang = lang;
    var t = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function(el){
      var key = el.getAttribute('data-i18n-alt');
      if (t[key] !== undefined) el.setAttribute('alt', t[key]);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
      var key = el.getAttribute('data-i18n-ph');
      if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){
      var key = el.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });
    document.getElementById('langBtnText').textContent = t.langBtn;
    try{ localStorage.setItem('miqyas-lang', lang); }catch(e){}
    if (document.getElementById('slotGrid')) renderBooking();
    if (typeof selectedSlot !== 'undefined' && selectedSlot) showBookForm();
  }

  /* ---------- nav: mobile menu toggle + highlight the current page ---------- */
  (function(){
    var nav = document.querySelector('nav');
    var toggle = document.querySelector('.nav-toggle');
    if (toggle) toggle.onclick = function(){
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    var here = location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
    Array.prototype.forEach.call(document.querySelectorAll('.nav-links a'), function(a){
      var target = (a.getAttribute('href') || '').split('#')[0].replace(/\.html$/, '') || 'index';
      if (target === here && !a.classList.contains('nav-login-mobile')) a.setAttribute('aria-current', 'page');
    });
  })();
  function copyVal(id, btn){
    var text = document.getElementById(id).textContent;
    var done = function(){ var o = btn.textContent; btn.textContent = '✓'; setTimeout(function(){ btn.textContent = o; }, 1200); };
    try{
      navigator.clipboard.writeText(text).then(done, function(){ fallbackCopy(text, done); });
    }catch(e){ fallbackCopy(text, done); }
  }
  function fallbackCopy(text, done){
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.focus(); ta.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
    done();
  }

  /* ---------- booking widget (book.html) ---------- */
  var CONTACT_EMAIL = 'adas.abdulmajeed@gmail.com';
  var WHATSAPP_NUMBER = '966550843077';
  var RIYADH_HOURS = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1];
  var NUM_DAYS = 14;
  var selectedDayKey = null;
  var selectedSlot = null;
  var dayData = null;

  function detectTZ(){
    try{ return Intl.DateTimeFormat().resolvedOptions().timeZone || 'local time'; }catch(e){ return 'local time'; }
  }
  function riyadhTodayYMD(){
    var shifted = new Date(Date.now() + 3*3600*1000);
    return { y: shifted.getUTCFullYear(), m: shifted.getUTCMonth(), d: shifted.getUTCDate() };
  }
  function generateSlots(){
    var base = riyadhTodayYMD();
    var minTime = Date.now() + 60*60*1000;
    var slots = [];
    for (var offset = 0; offset < NUM_DAYS; offset++){
      for (var i = 0; i < RIYADH_HOURS.length; i++){
        var h = RIYADH_HOURS[i];
        var dt = new Date(Date.UTC(base.y, base.m, base.d + offset, h - 3, 0, 0));
        if (dt.getTime() > minTime) slots.push(dt);
      }
    }
    slots.sort(function(a, b){ return a - b; });
    return slots;
  }
  function groupByLocalDay(slots){
    var order = [];
    var groups = {};
    slots.forEach(function(dt){
      var key = dt.toDateString();
      if (!groups[key]){ groups[key] = []; order.push(key); }
      groups[key].push(dt);
    });
    return { order: order, groups: groups };
  }
  function localeTag(){ return currentLang === 'ar' ? 'ar-SA' : 'en-US'; }
  function dayLabel(dt){ return dt.toLocaleDateString(localeTag(), { weekday: 'short', month: 'short', day: 'numeric' }); }
  function timeLabel(dt){ return dt.toLocaleTimeString(localeTag(), { hour: 'numeric', minute: '2-digit' }); }
  function riyadhLabel(dt){
    return dt.toLocaleString('en-US', { timeZone: 'Asia/Riyadh', weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) + ' Riyadh time';
  }

  function renderBooking(){
    var tabsEl = document.getElementById('dayTabs');
    var gridEl = document.getElementById('slotGrid');
    var tzEl = document.getElementById('tzNote');
    if (!tabsEl || !gridEl) return;

    var slots = generateSlots();
    dayData = groupByLocalDay(slots);
    if (!selectedDayKey || dayData.order.indexOf(selectedDayKey) === -1) selectedDayKey = dayData.order[0];

    tabsEl.innerHTML = '';
    dayData.order.slice(0, 10).forEach(function(key){
      var dt = dayData.groups[key][0];
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'day-tab' + (key === selectedDayKey ? ' active' : '');
      btn.textContent = dayLabel(dt);
      btn.onclick = function(){ selectedDayKey = key; selectedSlot = null; renderBooking(); };
      tabsEl.appendChild(btn);
    });

    gridEl.innerHTML = '';
    var daySlots = (dayData.groups[selectedDayKey] || []);
    if (daySlots.length === 0){
      var empty = document.createElement('div');
      empty.className = 'slot-empty';
      empty.textContent = translations[currentLang].noSlots;
      gridEl.appendChild(empty);
    }
    daySlots.forEach(function(dt){
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'slot-btn' + (selectedSlot && selectedSlot.getTime() === dt.getTime() ? ' selected' : '');
      btn.textContent = timeLabel(dt);
      btn.onclick = function(){ selectedSlot = dt; renderBooking(); showBookForm(); };
      gridEl.appendChild(btn);
    });

    if (tzEl) tzEl.textContent = translations[currentLang].tzNote.replace('{tz}', detectTZ());
  }

  function showBookForm(){
    var formEl = document.getElementById('bookForm');
    var labelEl = document.getElementById('selectedSlotLabel');
    if (!formEl || !selectedSlot) return;
    formEl.hidden = false;
    labelEl.textContent = translations[currentLang].selectedSlotPrefix + ' ' + dayLabel(selectedSlot) + ', ' + timeLabel(selectedSlot) + ' (' + riyadhLabel(selectedSlot) + ')';
    formEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function requestBookingEmail(){
    if (!selectedSlot) return;
    var name = document.getElementById('bookName').value.trim();
    var email = document.getElementById('bookEmail').value.trim();
    var note = document.getElementById('bookNote').value.trim();
    var subject = 'Call request — ' + dayLabel(selectedSlot) + ' ' + timeLabel(selectedSlot);
    var bodyLines = [
      'Name: ' + name,
      'Email: ' + email,
      'Requested time (my local time, ' + detectTZ() + '): ' + dayLabel(selectedSlot) + ', ' + timeLabel(selectedSlot),
      'Requested time (Riyadh): ' + riyadhLabel(selectedSlot),
      '',
      note
    ];
    window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(bodyLines.join('\n'));
  }

  function requestBookingWhatsapp(){
    if (!selectedSlot) return;
    var name = document.getElementById('bookName').value.trim();
    var note = document.getElementById('bookNote').value.trim();
    var lines = [
      'Hi, I would like to book a call.',
      'Name: ' + name,
      'Requested time (my local time, ' + detectTZ() + '): ' + dayLabel(selectedSlot) + ', ' + timeLabel(selectedSlot),
      'Riyadh time: ' + riyadhLabel(selectedSlot)
    ];
    if (note) lines.push('Note: ' + note);
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')), '_blank');
  }

  function sendContactForm(){
    var name = document.getElementById('cfName').value.trim();
    var email = document.getElementById('cfEmail').value.trim();
    var company = document.getElementById('cfCompany').value.trim();
    var message = document.getElementById('cfMessage').value.trim();
    var subject = 'Website contact — ' + (name || 'New inquiry');
    var bodyLines = [ 'Name: ' + name, 'Email: ' + email, 'Company: ' + company, '', message ];
    window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(bodyLines.join('\n'));
  }


  /* ---------- "Send your framework" mailto (home page CTA) ---------- */
  var sendFramework = document.getElementById('sendFramework');
  if (sendFramework) sendFramework.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Our assessment framework') + '&body=' + encodeURIComponent('Hi Rubriq team,\n\nAttached is the framework we currently use (spreadsheet, rubric, or scorecard).\n\nOrganization:\nWhat we assess:\n');

  /* ---------- output tabs: on phones they switch the visible card; on desktop they focus it ---------- */
  (function(){
    var tabs = document.querySelectorAll('.no-tab');
    var wrap = document.querySelector('.no-cards');
    Array.prototype.forEach.call(tabs, function(tab){
      tab.onclick = function(){
        Array.prototype.forEach.call(tabs, function(t){ t.setAttribute('aria-selected', t === tab ? 'true' : 'false'); });
        Array.prototype.forEach.call(document.querySelectorAll('.no-card'), function(card){
          card.classList.toggle('is-active', card.id === tab.getAttribute('aria-controls'));
        });
        wrap.classList.add('is-interacted');
      };
    });
  })();

  (function(){
    var saved = null;
    try{ saved = localStorage.getItem('miqyas-lang'); }catch(e){}
    setLang(saved === 'ar' ? 'ar' : 'en');
  })();