/* Shared script for every Rubriq page: translations, language switch, nav menu, and the
   booking / output-tab / mailto helpers. Each helper checks for its elements, so pages
   only get the behavior for what they contain. */
  var translations = {
    en: {
      brand:"Rubriq",
      navSolutions:"Solutions",
      navCta:"Book a demo",
      h1:"Clear insights<br>for a stronger<br><span class=\"hero-accent\">tomorrow.</span>",
      heroCta:"Book a demo", heroPlayAria:"See how Rubriq works",
      heroBtn1:"Book a Demo",
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
      hpKicker:"How it works", hpH1:"From your methodology to a finished client deliverable.",
      hpLede:"Set it up once. Run the assessment. Review the results. Rubriq handles the reporting.",
      hpBtn2:"See an Example Report",
      hpS1t:"Configure", hpS1p:"Your methodology and knowledge.",
      hpS2t:"Assess & Review", hpS2p:"Clients contribute. You stay in control.",
      hpS3t:"Generate", hpS3p:"Client-ready reports and development plans.",
      hpC1H2:"Configure your methodology once.",
      hpC1P:"Map your framework, knowledge base, terminology, and reporting style into Rubriq — then reuse it across every client and assessment cycle.",
      hpC1Note:"Reuse the same configured methodology across every client and assessment cycle.",
      hpC2H2:"Collect the evidence. Keep the judgment human.",
      hpC2P:"Clients complete the assessment, upload evidence, and add context. Your team reviews the results, checks the evidence, adjusts where needed, and approves the final assessment.",
      hpC2Note:"Nothing is generated until your team approves the assessment.",
      hpC3H2:"Approved assessment in. Finished deliverables out.",
      hpC3P:"Rubriq uses approved scores, evidence, and your methodology to generate client-ready reports and development plans in your organization's style.",
      hpF1t:"Evidence-grounded", hpF1p:"Uses approved scores, evidence, and notes.",
      hpF2t:"Written in your style", hpF2p:"Aligned with your templates, voice, and branding.",
      hpF3t:"Ready for the client", hpF3p:"Polished reports and development plans, instantly.",
      hpCtaKicker:"Ready to see it in action?", hpCtaH2:"See Rubriq running on<br>your own framework.",
      hpCtaP:"Bring your methodology, and we'll show you how Rubriq could work in practice for your team.",
      hpCtaBtn2:"Send Your Framework",
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
      bkDateTitle:"Select a date and time", bkTimesTitle:"Available times",
      bkPrevMonth:"Previous month", bkNextMonth:"Next month",
      noSlots:"No times left for this day — try another day.",
      bkDetailsTitle:"Your details",
      bkName:"Full name", bkNamePh:"Jane Smith",
      bkEmail:"Work email", bkEmailPh:"jane@company.com",
      bkCompany:"Company", bkCompanyPh:"Your company",
      bkRole:"Role", bkRolePh:"Select role",
      bkRole1:"Partner / Director", bkRole2:"Consultant", bkRole3:"Project or program manager", bkRole4:"Quality / M&E lead", bkRole5:"Other",
      bkFw:"Assessment type / framework", bkFwPh:"Select your framework",
      bkFw1:"Capacity / maturity assessment", bkFw2:"Program evaluation", bkFw3:"Quality review / accreditation", bkFw4:"Audit / compliance scorecard", bkFw5:"Leadership / performance assessment", bkFw6:"Other / custom framework",
      bkNotes:"Tell us about your framework", bkOptional:"(optional)",
      bkNotesPh:"e.g. key areas, structure, current tools or specific questions you'd like to cover...",
      bkUpload:"Upload framework", bkDrop:"Drop a file here or <u>browse</u>", bkDropHint:"PDF, PPT, DOCX (max 10MB)",
      bkFileType:"Please choose a PDF, PPT, or DOCX file.", bkFileSize:"That file is over 10MB. Please choose a smaller one.",
      bkSubmit:"Book Demo", bkNote:"You'll receive a calendar invite by email.",
      bkErrSlot:"Please pick a date and time.", bkErrFields:"Please fill in all required fields.", bkErrEmail:"Please enter a valid work email.",
      bkDone:"Your email app should now open with your request. Send it, and we'll confirm with a calendar invite.",
      bkDoneFile:"Your email app should now open with your request. Attach your framework file, send it, and we'll confirm with a calendar invite.",
      navContact:"Contact",
      ctTitle:"Contact us", ctLede:"Questions about Rubriq, your framework, or working together? Send us a message and we'll get back to you by email.",
      ctEmailLabel:"Email us", ctCopyAria:"Copy email address", ctDemoLabel:"Prefer to talk?", ctDemoLink:"Book a demo",
      ctFormTitle:"Send us a message", ctTopic:"Topic", ctTopicPh:"Select a topic",
      ctTopic1:"General question", ctTopic2:"Pricing", ctTopic3:"My framework", ctTopic4:"Partnership", ctTopic5:"Other",
      ctMsg:"Message", ctMsgPh:"How can we help?", ctSubmit:"Send message", ctNote:"We'll reply to your work email.",
      ctErrFields:"Please fill in your name, topic, and message.",
      ctDone:"Your email app should now open with your message. Send it and we'll get back to you.",
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
      h1:"رؤى واضحة<br>لغدٍ <span class=\"hero-accent\">أقوى.</span>",
      heroCta:"احجز عرضًا توضيحيًا", heroPlayAria:"شاهد كيف يعمل روبريك",
      heroBtn1:"احجز عرضًا توضيحيًا",
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
      hpKicker:"كيف يعمل", hpH1:"من منهجيتك إلى مُخرَج نهائي جاهز للعميل.",
      hpLede:"أعدّه مرة واحدة. نفّذ التقييم. راجع النتائج. وروبريك يتولى كتابة التقارير.",
      hpBtn2:"شاهد نموذج تقرير",
      hpS1t:"الإعداد", hpS1p:"منهجيتك ومعرفتك.",
      hpS2t:"التقييم والمراجعة", hpS2p:"العملاء يشاركون، وأنت تبقى المتحكّم.",
      hpS3t:"التوليد", hpS3p:"تقارير جاهزة للعميل وخطط تطوير.",
      hpC1H2:"اضبط منهجيتك مرة واحدة.",
      hpC1P:"انقل إطارك وقاعدة معرفتك ومصطلحاتك وأسلوب تقاريرك إلى روبريك — ثم أعد استخدامها مع كل عميل وكل دورة تقييم.",
      hpC1Note:"أعد استخدام المنهجية نفسها مع كل عميل وكل دورة تقييم.",
      hpC2H2:"اجمع البيّنات، وأبقِ الحكم بشريًا.",
      hpC2P:"يكمل العملاء التقييم ويرفعون البيّنات ويضيفون السياق. ثم يراجع فريقك النتائج ويتحقق من البيّنات ويعدّل عند الحاجة ويعتمد التقييم النهائي.",
      hpC2Note:"لا يُولَّد أي شيء قبل أن يعتمد فريقك التقييم.",
      hpC3H2:"تقييم معتمد يدخل، ومخرجات نهائية تخرج.",
      hpC3P:"يستخدم روبريك الدرجات المعتمدة والبيّنات ومنهجيتك لتوليد تقارير جاهزة للعميل وخطط تطوير بأسلوب جهتك.",
      hpF1t:"مبنية على البيّنات", hpF1p:"تستخدم الدرجات المعتمدة والبيّنات والملاحظات.",
      hpF2t:"مكتوبة بأسلوبك", hpF2p:"متوافقة مع قوالبك وأسلوبك وهويتك.",
      hpF3t:"جاهزة للعميل", hpF3p:"تقارير احترافية وخطط تطوير فورًا.",
      hpCtaKicker:"مستعد لرؤيته عمليًا؟", hpCtaH2:"شاهد روبريك يعمل<br>على إطارك الخاص.",
      hpCtaP:"أحضر منهجيتك، وسنريك كيف يمكن أن يعمل روبريك عمليًا لفريقك.",
      hpCtaBtn2:"أرسل إطارك",
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
      bkDateTitle:"اختر التاريخ والوقت", bkTimesTitle:"الأوقات المتاحة",
      bkPrevMonth:"الشهر السابق", bkNextMonth:"الشهر التالي",
      noSlots:"لا توجد أوقات متاحة في هذا اليوم — جرّب يومًا آخر.",
      bkDetailsTitle:"بياناتك",
      bkName:"الاسم الكامل", bkNamePh:"سارة أحمد",
      bkEmail:"البريد الإلكتروني للعمل", bkEmailPh:"name@company.com",
      bkCompany:"الجهة", bkCompanyPh:"اسم جهتك",
      bkRole:"الدور", bkRolePh:"اختر الدور",
      bkRole1:"شريك / مدير", bkRole2:"استشاري", bkRole3:"مدير مشروع أو برنامج", bkRole4:"مسؤول الجودة / المتابعة والتقييم", bkRole5:"أخرى",
      bkFw:"نوع التقييم / الإطار", bkFwPh:"اختر إطارك",
      bkFw1:"تقييم القدرات / النضج", bkFw2:"تقييم البرامج", bkFw3:"مراجعة الجودة / الاعتماد", bkFw4:"بطاقة تدقيق / امتثال", bkFw5:"تقييم القيادة / الأداء", bkFw6:"إطار آخر / مخصص",
      bkNotes:"أخبرنا عن إطارك", bkOptional:"(اختياري)",
      bkNotesPh:"مثلًا: المجالات الرئيسية، الهيكل، الأدوات الحالية، أو أسئلة محددة تود مناقشتها...",
      bkUpload:"ارفع إطارك", bkDrop:"اسحب الملف هنا أو <u>تصفّح</u>", bkDropHint:"PDF أو PPT أو DOCX (حتى 10MB)",
      bkFileType:"يرجى اختيار ملف PDF أو PPT أو DOCX.", bkFileSize:"حجم الملف يتجاوز 10MB. يرجى اختيار ملف أصغر.",
      bkSubmit:"احجز العرض", bkNote:"ستصلك دعوة تقويم عبر البريد الإلكتروني.",
      bkErrSlot:"يرجى اختيار التاريخ والوقت.", bkErrFields:"يرجى تعبئة جميع الحقول المطلوبة.", bkErrEmail:"يرجى إدخال بريد إلكتروني صحيح للعمل.",
      bkDone:"سيفتح تطبيق البريد لديك الآن مع طلبك. أرسله وسنؤكد الموعد بدعوة تقويم.",
      bkDoneFile:"سيفتح تطبيق البريد لديك الآن مع طلبك. أرفق ملف إطارك ثم أرسله، وسنؤكد الموعد بدعوة تقويم.",
      navContact:"تواصل معنا",
      ctTitle:"تواصل معنا", ctLede:"لديك أسئلة حول روبريك أو إطارك أو التعاون معنا؟ أرسل لنا رسالة وسنرد عليك عبر البريد الإلكتروني.",
      ctEmailLabel:"راسلنا", ctCopyAria:"نسخ البريد الإلكتروني", ctDemoLabel:"تفضّل التحدث؟", ctDemoLink:"احجز عرضًا توضيحيًا",
      ctFormTitle:"أرسل لنا رسالة", ctTopic:"الموضوع", ctTopicPh:"اختر الموضوع",
      ctTopic1:"سؤال عام", ctTopic2:"الأسعار", ctTopic3:"إطاري", ctTopic4:"شراكة", ctTopic5:"أخرى",
      ctMsg:"الرسالة", ctMsgPh:"كيف يمكننا مساعدتك؟", ctSubmit:"إرسال الرسالة", ctNote:"سنرد على بريدك الإلكتروني للعمل.",
      ctErrFields:"يرجى إدخال اسمك والموضوع والرسالة.",
      ctDone:"سيفتح تطبيق البريد لديك الآن مع رسالتك. أرسلها وسنعود إليك.",
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
    if (document.getElementById('bkCal') && bk.tz) renderBooking();
  }

  /* ---------- nav: mobile menu toggle + highlight the current page ---------- */
  (function(){
    var nav = document.querySelector('nav');
    var toggle = document.querySelector('.nav-toggle');
    /* home page: the menu floats transparent over the hero photo and turns solid after scrolling or when opened */
    var solid = function(){ if (nav.classList.contains('nav-over')) nav.classList.toggle('is-solid', window.scrollY > 40 || nav.classList.contains('open')); };
    window.addEventListener('scroll', solid, { passive: true });
    solid();
    if (toggle) toggle.onclick = function(){
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      solid();
    };
    var here = location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
    Array.prototype.forEach.call(document.querySelectorAll('.nav-links a'), function(a){
      var target = (a.getAttribute('href') || '').split('#')[0].replace(/\.html$/, '') || 'index';
      if (target === here && !a.classList.contains('nav-login-mobile')) a.setAttribute('aria-current', 'page');
    });
  })();

  /* ---------- booking page (book.html): month calendar, time slots, details form ----------
     Availability: hourly slots 8 AM – 1 AM Riyadh time for the next NUM_DAYS days, at least 1 hour ahead.
     There is no backend yet, so "Book Demo" opens a pre-filled email; the owner confirms with a calendar invite. */
  var CONTACT_EMAIL = 'adas.abdulmajeed@gmail.com';
  var RIYADH_HOURS = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1];
  var NUM_DAYS = 90;   /* how far ahead visitors can book; the month arrows go up to the last month with open times */
  var bk = { tz: null, month: null, day: null, slot: null, file: null };

  function detectTZ(){
    try{ return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Riyadh'; }catch(e){ return 'Asia/Riyadh'; }
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
  function riyadhLabel(dt){
    return dt.toLocaleString('en-US', { timeZone: 'Asia/Riyadh', weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) + ' Riyadh time';
  }
  function bkLocale(){ return currentLang === 'ar' ? 'ar-u-ca-gregory-nu-latn' : 'en-US'; }
  /* calendar day key (YYYY-MM-DD) of a moment in the chosen timezone */
  function bkKey(dt, tz){ return new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(dt); }
  function bkTzLabel(tz){
    var off = '';
    try{ off = new Intl.DateTimeFormat('en-US', { timeZone: tz, timeZoneName: 'shortOffset' }).formatToParts(new Date()).filter(function(p){ return p.type === 'timeZoneName'; })[0].value; }catch(e){}
    return (off ? off + ' ' : '') + '(' + tz.split('/').pop().replace(/_/g, ' ') + ')';
  }
  function bkTime(dt){ return dt.toLocaleTimeString(bkLocale(), { timeZone: bk.tz, hour: 'numeric', minute: '2-digit' }); }
  function bkDayLong(dt){ return dt.toLocaleDateString(bkLocale(), { timeZone: bk.tz, weekday: 'long', month: 'long', day: 'numeric' }); }

  function renderBooking(){
    var cal = document.getElementById('bkCal');
    if (!cal) return;
    var t = translations[currentLang];
    var groups = {}, order = [];
    generateSlots().forEach(function(dt){ var k = bkKey(dt, bk.tz); if (!groups[k]){ groups[k] = []; order.push(k); } groups[k].push(dt); });
    if (!bk.day || !groups[bk.day]){ bk.day = order[0] || null; bk.slot = null; }
    var todayKey = bkKey(new Date(), bk.tz);
    if (!bk.month) bk.month = (bk.day || todayKey).slice(0, 7);
    var minMonth = todayKey.slice(0, 7), maxMonth = (order[order.length - 1] || todayKey).slice(0, 7);
    var y = +bk.month.slice(0, 4), m = +bk.month.slice(5, 7) - 1;
    /* when browsing to another month, select that month's first open day so the times match what's on screen */
    if (bk.day && bk.day.slice(0, 7) !== bk.month){
      var inMonth = order.filter(function(k){ return k.slice(0, 7) === bk.month; });
      if (inMonth.length){ bk.day = inMonth[0]; bk.slot = null; }
    }

    document.getElementById('bkMonthLabel').textContent = new Date(Date.UTC(y, m, 15)).toLocaleDateString(bkLocale(), { timeZone: 'UTC', month: 'long', year: 'numeric' });
    document.getElementById('bkPrev').disabled = bk.month <= minMonth;
    document.getElementById('bkNext').disabled = bk.month >= maxMonth;

    cal.innerHTML = '';
    for (var w = 0; w < 7; w++){
      var head = document.createElement('span');
      head.className = 'bk-dow';
      head.textContent = new Date(Date.UTC(2024, 0, 7 + w)).toLocaleDateString(bkLocale(), { timeZone: 'UTC', weekday: 'short' });
      cal.appendChild(head);
    }
    var first = new Date(Date.UTC(y, m, 1));
    var start = new Date(Date.UTC(y, m, 1 - first.getUTCDay()));
    for (var i = 0; i < 42; i++){
      var d = new Date(start.getTime() + i * 86400000);
      if (i >= 35 && d.getUTCMonth() !== m) break;
      var key = d.toISOString().slice(0, 10);
      var open = !!groups[key] && d.getUTCMonth() === m;   /* neighbouring-month days stay faded and inactive */
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = d.getUTCDate();
      btn.className = 'bk-day' + (d.getUTCMonth() !== m ? ' other' : '') + (open ? ' open' : '') + (open && key === bk.day ? ' selected' : '');
      if (open){
        btn.onclick = (function(k){ return function(){ bk.day = k; bk.slot = null; renderBooking(); }; })(key);
        btn.setAttribute('aria-pressed', key === bk.day ? 'true' : 'false');
      } else {
        btn.disabled = true;
      }
      cal.appendChild(btn);
    }

    var slotsEl = document.getElementById('bkSlots');
    slotsEl.innerHTML = '';
    var daySlots = groups[bk.day] || [];
    if (!daySlots.length){
      var empty = document.createElement('p');
      empty.className = 'bk-empty';
      empty.textContent = t.noSlots;
      slotsEl.appendChild(empty);
    }
    daySlots.forEach(function(dt){
      var s = document.createElement('button');
      s.type = 'button';
      s.className = 'bk-slot' + (bk.slot && bk.slot.getTime() === dt.getTime() ? ' selected' : '');
      s.textContent = bkTime(dt);
      s.setAttribute('aria-pressed', bk.slot && bk.slot.getTime() === dt.getTime() ? 'true' : 'false');
      s.onclick = function(){ bk.slot = dt; renderBooking(); };
      slotsEl.appendChild(s);
    });
  }

  function bkSetFile(file){
    var note = document.getElementById('bkFileName');
    var t = translations[currentLang];
    bk.file = null;
    if (!file){ note.textContent = ''; return; }
    if (!/\.(pdf|pptx?|docx?)$/i.test(file.name)){ note.textContent = t.bkFileType; return; }
    if (file.size > 10 * 1024 * 1024){ note.textContent = t.bkFileSize; return; }
    bk.file = file;
    note.textContent = file.name + ' (' + Math.max(1, Math.round(file.size / 1024)) + ' KB)';
  }

  (function(){
    var form = document.getElementById('bkForm');
    if (!form) return;
    /* the visitor's own timezone is detected automatically and shown as a label (no picker) */
    bk.tz = detectTZ();
    document.getElementById('bkTz').textContent = bkTzLabel(bk.tz);
    function shiftMonth(n){ var y = +bk.month.slice(0, 4), m = +bk.month.slice(5, 7) - 1 + n; bk.month = new Date(Date.UTC(y, m, 1)).toISOString().slice(0, 7); renderBooking(); }
    document.getElementById('bkPrev').onclick = function(){ shiftMonth(-1); };
    document.getElementById('bkNext').onclick = function(){ shiftMonth(1); };

    var notes = document.getElementById('bkNotes'), count = document.getElementById('bkCount');
    notes.oninput = function(){ count.textContent = notes.value.length + '/500'; };

    var fileInput = document.getElementById('bkFile'), drop = document.getElementById('bkDrop');
    fileInput.onchange = function(){ bkSetFile(fileInput.files[0]); };
    ['dragenter','dragover'].forEach(function(ev){ drop.addEventListener(ev, function(e){ e.preventDefault(); drop.classList.add('drag'); }); });
    ['dragleave','drop'].forEach(function(ev){ drop.addEventListener(ev, function(e){ e.preventDefault(); drop.classList.remove('drag'); }); });
    drop.addEventListener('drop', function(e){ if (e.dataTransfer && e.dataTransfer.files[0]) bkSetFile(e.dataTransfer.files[0]); });

    form.onsubmit = function(e){
      e.preventDefault();
      var t = translations[currentLang];
      var err = document.getElementById('bkError');
      var val = function(id){ return document.getElementById(id).value.trim(); };
      var missing = !val('bkName') || !val('bkCompany') || !val('bkRole') || !val('bkFramework');
      var problem = !bk.slot ? t.bkErrSlot : missing ? t.bkErrFields : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val('bkEmail')) ? t.bkErrEmail : '';
      err.hidden = !problem;
      err.textContent = problem;
      if (problem) return;
      var role = document.getElementById('bkRole'), fw = document.getElementById('bkFramework');
      var when = bkDayLong(bk.slot) + ', ' + bkTime(bk.slot);
      var lines = [
        'Name: ' + val('bkName'),
        'Work email: ' + val('bkEmail'),
        'Company: ' + val('bkCompany'),
        'Role: ' + role.options[role.selectedIndex].text,
        'Assessment type / framework: ' + fw.options[fw.selectedIndex].text,
        'Requested time (' + bkTzLabel(bk.tz) + '): ' + when,
        'Requested time (Riyadh): ' + riyadhLabel(bk.slot),
        '',
        'About the framework:',
        val('bkNotes') || '-'
      ];
      if (bk.file) lines.push('', 'Framework file: ' + bk.file.name + ' (please attach it to this email before sending)');
      window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Demo request: ' + val('bkCompany') + ', ' + when) + '&body=' + encodeURIComponent(lines.join('\n'));
      var done = document.getElementById('bkDone');
      done.hidden = false;
      done.textContent = bk.file ? t.bkDoneFile : t.bkDone;
    };
    renderBooking();
  })();


  /* ---------- contact page (contact.html): message form + copy email ----------
     No backend yet, so "Send message" validates and opens a pre-filled email to CONTACT_EMAIL. */
  (function(){
    var form = document.getElementById('ctForm');
    if (!form) return;
    var msg = document.getElementById('ctMessage'), count = document.getElementById('ctCount');
    msg.oninput = function(){ count.textContent = msg.value.length + '/1000'; };
    var copy = document.getElementById('ctCopy');
    copy.onclick = function(){
      var done = function(){ copy.classList.add('copied'); setTimeout(function(){ copy.classList.remove('copied'); }, 1400); };
      try{ navigator.clipboard.writeText(CONTACT_EMAIL).then(done, function(){}); }catch(e){}
    };
    form.onsubmit = function(e){
      e.preventDefault();
      var t = translations[currentLang];
      var val = function(id){ return document.getElementById(id).value.trim(); };
      var err = document.getElementById('ctError');
      var problem = (!val('ctName') || !val('ctTopic') || !val('ctMessage')) ? t.ctErrFields : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val('ctMail')) ? t.bkErrEmail : '';
      err.hidden = !problem;
      err.textContent = problem;
      if (problem) return;
      var topic = document.getElementById('ctTopic');
      var topicText = topic.options[topic.selectedIndex].text;
      var lines = [
        'Name: ' + val('ctName'),
        'Work email: ' + val('ctMail'),
        'Company: ' + (val('ctCompany') || '-'),
        'Topic: ' + topicText,
        '',
        val('ctMessage')
      ];
      window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Website message: ' + topicText + (val('ctCompany') ? ' (' + val('ctCompany') + ')' : '')) + '&body=' + encodeURIComponent(lines.join('\n'));
      var done = document.getElementById('ctDone');
      done.hidden = false;
      done.textContent = t.ctDone;
    };
  })();

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
