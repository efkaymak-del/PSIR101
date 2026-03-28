/* ═══════════════════════════════════════════════════════════
   PSIR101 Course Data — All question banks, terms, events
════════════════════════════════════════════════════════════ */

const PSIR101_DATA = {

  /* ── QUIZ QUESTIONS ─────────────────────────────────── */
  quiz: [
    {
      topic: "IR Theories",
      question: "Which IR theory argues that states are the primary actors and that power and security are the main drivers of international politics?",
      options: ["Liberalism", "Realism", "Constructivism", "Marxism"],
      answer: 1,
      explanation: "Realism holds that states act in their rational self-interest to maximize power in an anarchic international system. Thinkers like Morgenthau and Waltz are key realists."
    },
    {
      topic: "IR Theories",
      question: "Alexander Wendt's famous phrase 'Anarchy is what states make of it' is associated with which IR theory?",
      options: ["Realism", "Liberalism", "Marxism", "Constructivism"],
      answer: 3,
      explanation: "Constructivism argues that international structures are socially constructed through ideas, norms, and identities. Anarchy, rather than being a fixed constraint, is shaped by how states interact."
    },
    {
      topic: "Globalization",
      question: "Which perspective on globalization argues that it is largely a myth and that nation-states remain dominant?",
      options: ["Hyperglobalists", "Transformationalists", "Sceptics", "Constructivists"],
      answer: 2,
      explanation: "Sceptics like Paul Hirst and Grahame Thompson argue that the extent of globalization is exaggerated, international flows are not historically unprecedented, and states remain powerful."
    },
    {
      topic: "Globalization",
      question: "Mark Carney's 2026 Davos speech argued that which international order has ended?",
      options: ["Bipolar Cold War order", "The rules-based international order", "The Bretton Woods system", "The League of Nations system"],
      answer: 1,
      explanation: "Carney's speech 'The End of the Rules-Based Order' argued that the multilateral, rules-based system built after WWII is being replaced by a more transactional, power-based approach."
    },
    {
      topic: "International Organizations",
      question: "What does 'IGO' stand for in the context of international organizations?",
      options: ["International Governing Organization", "Intergovernmental Organization", "International Geopolitical Order", "Integrated Global Operation"],
      answer: 1,
      explanation: "IGO stands for Intergovernmental Organization — bodies created by treaties between states, such as the UN, NATO, and the WTO."
    },
    {
      topic: "International Organizations",
      question: "The 'principal-agent problem' in international organizations refers to:",
      options: ["The difficulty of states agreeing on who leads", "The gap between what member states want and what the IO actually does", "The cost of membership fees", "The problem of enforcing international law"],
      answer: 1,
      explanation: "The principal-agent problem occurs when IOs (agents) develop their own agendas, cultures, and interests that diverge from what member states (principals) intended when creating them."
    },
    {
      topic: "The United Nations",
      question: "Which UN organ has primary responsibility for the maintenance of international peace and security?",
      options: ["The General Assembly", "The Economic and Social Council", "The Security Council", "The International Court of Justice"],
      answer: 2,
      explanation: "Under the UN Charter (Chapter VII), the Security Council has primary responsibility for international peace and security and can authorize coercive measures including the use of force."
    },
    {
      topic: "The United Nations",
      question: "How many of the P5 members of the UN Security Council are needed to exercise a veto?",
      options: ["All five must agree to veto", "One P5 member voting 'no' constitutes a veto", "Three P5 members must agree to veto", "Two P5 members can jointly veto"],
      answer: 1,
      explanation: "Any single permanent member (P5) can veto a substantive resolution by voting 'no'. This has been a major source of criticism and a barrier to Security Council action on many crises."
    },
    {
      topic: "Gender",
      question: "UNSCR 1325, adopted in 2000, primarily addresses:",
      options: ["Climate change and gender", "Women, peace, and security in conflict", "Gender pay equity in international organizations", "Female leadership in the UN Secretariat"],
      answer: 1,
      explanation: "UN Security Council Resolution 1325 on Women, Peace and Security called for increased participation of women in peace processes and protection of women in conflict."
    },
    {
      topic: "Race",
      question: "W.E.B. Du Bois's concept of the 'colour line' refers to:",
      options: ["The border between colonial territories", "The problem of the 20th century being the relation between lighter and darker peoples", "Racial segregation in the United States only", "The line on maps separating European empires"],
      answer: 1,
      explanation: "Du Bois argued in 'The Souls of Black Folk' (1903) that 'the problem of the Twentieth Century is the problem of the colour-line' — the global hierarchical division between races."
    },
    {
      topic: "Race",
      question: "Robbie Shilliam argues that race functions in world politics primarily as:",
      options: ["A biological category used to classify populations", "A foundational ordering principle shaping hierarchy and order", "A domestic political issue irrelevant to IR", "A product of Cold War ideological competition"],
      answer: 1,
      explanation: "Shilliam's chapter in Baylis, Smith & Owens argues that race has been a foundational, not peripheral, principle structuring the international order — from colonialism to contemporary security discourse."
    },
    {
      topic: "Human Rights",
      question: "The 'Responsibility to Protect' (R2P) doctrine was formally adopted at the UN World Summit in:",
      options: ["1945", "1998", "2005", "2011"],
      answer: 2,
      explanation: "R2P was adopted at the 2005 UN World Summit. It holds that states have a responsibility to protect populations from genocide, war crimes, ethnic cleansing, and crimes against humanity, and that the international community can intervene if states fail."
    },
    {
      topic: "Human Rights",
      question: "Which argument holds that universal human rights standards are not truly universal but reflect Western liberal values?",
      options: ["Universalism", "Cultural relativism", "R2P", "Constructivism"],
      answer: 1,
      explanation: "Cultural relativism challenges the universality of human rights, arguing that rights are culturally determined and that international standards can be a form of Western cultural imperialism."
    },
    {
      topic: "Environment",
      question: "The term 'Anthropocene' refers to:",
      options: ["A new era of human-caused environmental change on a geological scale", "The period of industrialization in Europe", "The study of human geography", "The Cold War nuclear age"],
      answer: 0,
      explanation: "The Anthropocene is a proposed geological epoch defined by the dominant impact of human activity on Earth's geology and ecosystems, including climate change, biodiversity loss, and pollution."
    },
    {
      topic: "Cyprus",
      question: "The UN peacekeeping force in Cyprus (UNFICYP) was established in:",
      options: ["1956", "1960", "1964", "1974"],
      answer: 2,
      explanation: "UNFICYP was established in 1964 following intercommunal violence between Greek Cypriots and Turkish Cypriots. It remains one of the longest-running UN peacekeeping operations."
    },
    {
      topic: "Cyprus",
      question: "The 'Green Line' in Cyprus refers to:",
      options: ["A peace agreement signed in 1977", "The UN Buffer Zone dividing the island", "The maritime border between Cyprus and Turkey", "An environmental protection zone"],
      answer: 1,
      explanation: "The Green Line is the UN-controlled buffer zone that divides Cyprus since 1974. It runs through Nicosia (the only divided capital in Europe) and across the island."
    },
    {
      topic: "IR Theories",
      question: "Which theory views globalization primarily as a new stage of capitalism that produces global inequality between the Global North and South?",
      options: ["Realism", "Liberalism", "Constructivism", "Marxism"],
      answer: 3,
      explanation: "Marxist IR theory sees globalization as driven by capitalist expansion, benefiting ruling-class elites and MNCs while exploiting workers and developing nations."
    },
    {
      topic: "IR Theories",
      question: "Feminist IR theory challenges mainstream IR primarily by arguing that:",
      options: ["States are irrational actors", "Gender and women's experiences are systematically excluded from IR analysis", "War is always unjust", "International organizations are unnecessary"],
      answer: 1,
      explanation: "Feminist IR scholars argue that mainstream IR has been dominated by a masculine perspective that ignores gender as an analytical category and marginalizes women's experiences in global politics."
    },
    {
      topic: "International Organizations",
      question: "The G20 is best classified as which type of international arrangement?",
      options: ["Intergovernmental Organization (IGO)", "International Non-Governmental Organization (INGO)", "Informal multilateral forum", "Treaty-based supranational body"],
      answer: 2,
      explanation: "The G20 is an informal forum — it has no founding treaty, no permanent secretariat, and its decisions are not legally binding. It exemplifies informal multilateralism."
    },
    {
      topic: "Globalization",
      question: "Which of the following best describes the 'transformationalist' view of globalization?",
      options: ["Globalization has fundamentally ended the nation-state", "Globalization is not happening; states remain dominant", "Globalization is real but uncertain in outcome; it transforms rather than eliminates states", "Globalization is purely an economic phenomenon"],
      answer: 2,
      explanation: "Transformationalists like Anthony Giddens and Jan Aart Scholte argue that globalization is a powerful real force transforming the nature of states and governance, but its outcomes are complex and contested."
    }
  ],

  /* ── FILL IN THE BLANK ─────────────────────────────── */
  fill: [
    {
      topic: "IR Theories",
      sentence: "In Realist theory, the international system is characterized by _____, meaning there is no world government above states.",
      blank: "_____",
      options: ["anarchy", "sovereignty", "interdependence", "hierarchy"],
      answer: "anarchy",
      explanation: "Anarchy — the absence of a central world government — is the fundamental starting point for Realist IR theory. States must rely on themselves (self-help) to survive."
    },
    {
      topic: "Globalization",
      sentence: "The three main perspectives on globalization are hyperglobalists, sceptics, and _____.",
      blank: "_____",
      options: ["transformationalists", "realists", "constructivists", "postcolonialists"],
      answer: "transformationalists",
      explanation: "The textbook (Baylis, Smith & Owens pp. 19-34) identifies three schools: hyperglobalists (globalization is unprecedented and transforms everything), sceptics (it's overblown), and transformationalists (it's real but complex)."
    },
    {
      topic: "The United Nations",
      sentence: "The five permanent members of the UN Security Council — the United States, UK, France, Russia, and China — collectively known as the _____ — each hold veto power.",
      blank: "_____",
      options: ["P5", "G5", "Big Five", "Permanent Five"],
      answer: "P5",
      explanation: "The P5 (Permanent Five) were established by the UN Charter in 1945. Their veto power reflects the post-WWII power structure."
    },
    {
      topic: "IR Theories",
      sentence: "Constructivism holds that international structures are _____ constructed through ideas, norms, and identities rather than given by material reality.",
      blank: "_____",
      options: ["socially", "biologically", "economically", "legally"],
      answer: "socially",
      explanation: "Constructivism's core claim is that key aspects of international relations are socially constructed — they depend on intersubjective meaning, not just material facts."
    },
    {
      topic: "Race",
      sentence: "W.E.B. Du Bois argued that the central problem of the twentieth century was the problem of the '_____ line'.",
      blank: "_____",
      options: ["colour", "border", "class", "gender"],
      answer: "colour",
      explanation: "Du Bois' concept of the colour line highlighted the global racial hierarchy that structured political, economic, and social life worldwide."
    },
    {
      topic: "Human Rights",
      sentence: "The _____ (R2P) doctrine holds that the international community has a responsibility to intervene if a state fails to protect its population from mass atrocities.",
      blank: "_____",
      options: ["Responsibility to Protect", "Right to Punish", "Responsibility to Prosecute", "Right to Prevention"],
      answer: "Responsibility to Protect",
      explanation: "R2P, adopted at the 2005 World Summit, has three pillars: the state's responsibility to protect its citizens, the international community's responsibility to assist states, and the responsibility to intervene when states fail."
    },
    {
      topic: "Cyprus",
      sentence: "The UN peacekeeping force in Cyprus is known by the acronym _____.",
      blank: "_____",
      options: ["UNFICYP", "UNICEF", "UNIFIL", "UNPROFOR"],
      answer: "UNFICYP",
      explanation: "UNFICYP (UN Force in Cyprus) was established in 1964 and remains one of the UN's oldest peacekeeping operations."
    },
    {
      topic: "International Organizations",
      sentence: "An organization created by a treaty between three or more states is called an _____ (IGO).",
      blank: "_____",
      options: ["Intergovernmental Organization", "International Governance Office", "Integrated Global Order", "International Governing Operation"],
      answer: "Intergovernmental Organization",
      explanation: "IGOs are formal international bodies with state membership, created by multilateral treaties. Examples: UN, NATO, WTO, EU."
    }
  ],

  /* ── MATCHING GAME ─────────────────────────────────── */
  matching: [
    [
      { id: "m1a", text: "Realism", group: "a" },
      { id: "m2a", text: "Liberalism", group: "a" },
      { id: "m3a", text: "Constructivism", group: "a" },
      { id: "m4a", text: "Marxism", group: "a" },
      { id: "m5a", text: "Post-colonialism", group: "a" },
      { id: "m6a", text: "Feminism", group: "a" }
    ],
    [
      { id: "m1b", text: "States seek power in an anarchic world; self-help is essential", match: "m1a" },
      { id: "m2b", text: "Institutions and cooperation can overcome anarchy; interdependence matters", match: "m2a" },
      { id: "m3b", text: "Anarchy is what states make of it; ideas and norms shape reality", match: "m3a" },
      { id: "m4b", text: "Globalization serves capitalist elites; class conflict drives history", match: "m4a" },
      { id: "m5b", text: "Western IR ignores colonial legacies; knowledge reflects imperial power", match: "m5a" },
      { id: "m6b", text: "Gender shapes global politics; women's experiences are systematically ignored", match: "m6a" }
    ]
  ],

  matchingSets: [
    {
      title: "IR Theories & Core Claims",
      pairs: [
        { term: "Realism", definition: "States seek power in an anarchic world; self-help is essential" },
        { term: "Liberalism", definition: "Institutions and cooperation can overcome anarchy; interdependence matters" },
        { term: "Constructivism", definition: "Anarchy is what states make of it; ideas and norms shape reality" },
        { term: "Marxism", definition: "Globalization serves capitalist elites; class conflict drives history" },
        { term: "Post-colonialism", definition: "Western IR ignores colonial legacies and non-Western perspectives" },
        { term: "Feminism", definition: "Gender shapes global politics; women's experiences are systematically ignored" }
      ]
    },
    {
      title: "Key Thinkers & Concepts",
      pairs: [
        { term: "W.E.B. Du Bois", definition: "The 'colour line' as the problem of the 20th century" },
        { term: "Alexander Wendt", definition: "'Anarchy is what states make of it'" },
        { term: "Hans Morgenthau", definition: "Classical realism and 'Politics Among Nations'" },
        { term: "Robert Keohane", definition: "Complex interdependence and liberal institutionalism" },
        { term: "Robbie Shilliam", definition: "Race as a foundational ordering principle in world politics" },
        { term: "Antonio Gramsci", definition: "Hegemony and the role of ideas in maintaining power (used by Marxist IR)" }
      ]
    },
    {
      title: "UN Organs & Functions",
      pairs: [
        { term: "General Assembly", definition: "193 members, one vote each, debates global issues" },
        { term: "Security Council", definition: "Primary responsibility for international peace and security" },
        { term: "International Court of Justice", definition: "Settles legal disputes between states; based in The Hague" },
        { term: "Secretariat", definition: "Administrative arm led by the Secretary-General" },
        { term: "ECOSOC", definition: "Coordinates UN's economic, social, and environmental work" },
        { term: "Trusteeship Council", definition: "Supervised post-WWII trust territories; suspended operations 1994" }
      ]
    },
    {
      title: "Events & Dates",
      pairs: [
        { term: "1945", definition: "Founding of the United Nations" },
        { term: "1948", definition: "Universal Declaration of Human Rights + start of apartheid" },
        { term: "1964", definition: "UNFICYP established in Cyprus" },
        { term: "1974", definition: "Turkish military intervention in Cyprus; island divided" },
        { term: "2005", definition: "R2P adopted at UN World Summit" },
        { term: "1994", definition: "End of apartheid; South Africa's first multi-racial elections" }
      ]
    }
  ],

  /* ── TIMELINE SORT ─────────────────────────────────── */
  timelines: [
    {
      title: "History of International Organizations",
      items: [
        { year: "1815", text: "Congress of Vienna — early multilateral diplomacy among European powers", order: 0 },
        { year: "1864", text: "First Geneva Convention — foundation of international humanitarian law", order: 1 },
        { year: "1919", text: "League of Nations founded after WWI — first attempt at collective security", order: 2 },
        { year: "1945", text: "United Nations founded — 51 original member states", order: 3 },
        { year: "1948", text: "Universal Declaration of Human Rights adopted by UN General Assembly", order: 4 },
        { year: "1964", text: "UNFICYP established — one of UN's longest-running peacekeeping missions", order: 5 },
        { year: "1995", text: "World Trade Organization (WTO) founded, replacing the GATT", order: 6 },
        { year: "2005", text: "R2P doctrine adopted at the UN World Summit", order: 7 }
      ]
    },
    {
      title: "Race, Colonialism & Civil Rights Timeline",
      items: [
        { year: "1791", text: "Haitian Revolution begins — first successful large-scale slave revolt", order: 0 },
        { year: "1804", text: "Haiti declares independence — first Black republic", order: 1 },
        { year: "1903", text: "W.E.B. Du Bois publishes 'The Souls of Black Folk' — the colour line", order: 2 },
        { year: "1948", text: "Apartheid formally established in South Africa", order: 3 },
        { year: "1960", text: "Sharpeville Massacre — 69 protesters killed by South African police", order: 4 },
        { year: "1964", text: "U.S. Civil Rights Act enacted", order: 5 },
        { year: "1994", text: "South Africa holds first multi-racial democratic elections; Mandela elected", order: 6 }
      ]
    },
    {
      title: "Cyprus Conflict Timeline",
      items: [
        { year: "1960", text: "Cyprus gains independence from British colonial rule", order: 0 },
        { year: "1963", text: "Intercommunal violence between Greek and Turkish Cypriots", order: 1 },
        { year: "1964", text: "UN peacekeeping force UNFICYP deployed", order: 2 },
        { year: "1974", text: "Greek coup attempt; Turkish military intervention; island de facto divided", order: 3 },
        { year: "1983", text: "Turkish Cypriots declare Turkish Republic of Northern Cyprus (TRNC)", order: 4 },
        { year: "2003", text: "Checkpoints at Green Line opened — movement between two sides restored", order: 5 },
        { year: "2004", text: "Annan Plan for reunification rejected in referendum by Greek Cypriots", order: 6 }
      ]
    }
  ],

  /* ── THEORY IDENTIFIER STATEMENTS ─────────────────── */
  theoryStatements: [
    { statement: "International institutions like the WTO help states overcome collective action problems and facilitate mutually beneficial trade.", theory: "Liberalism", explanation: "This reflects liberal institutionalism — the idea that IOs reduce transaction costs, provide information, and enable sustained cooperation." },
    { statement: "The United States maintains its military dominance not because it is aggressive but because in an anarchic world, self-help is the only rational strategy.", theory: "Realism", explanation: "This is a core Realist claim: in anarchy, states maximize power for survival, not because of malicious intent." },
    { statement: "Globalization is best understood as a new stage of capitalism that systematically transfers wealth from peripheral developing nations to the core capitalist powers.", theory: "Marxism", explanation: "World-systems theory (Wallerstein) and dependency theory (Frank) are Marxist approaches that frame globalization as capitalist exploitation." },
    { statement: "NATO is not just a military alliance — it is a community of shared democratic values. Its expansion reflects a spreading liberal-democratic identity, not just strategic interest.", theory: "Constructivism", explanation: "Constructivists argue that NATO is held together by shared norms and collective identity, not just material interests." },
    { statement: "The concept of 'human rights' is a Western liberal invention used to justify intervention in non-Western societies while protecting Western economic interests.", theory: "Post-colonialism", explanation: "Postcolonial IR scholars critique universal human rights as a discourse that serves neo-colonial purposes while ignoring Global South experiences." },
    { statement: "The most important overlooked factor in climate negotiations is that women in the Global South bear the greatest burden of environmental degradation but have the least representation at negotiating tables.", theory: "Feminism", explanation: "Feminist IR draws attention to gendered dimensions of environmental politics and the exclusion of women from peace and security decision-making." },
    { statement: "The Cyprus conflict persists because Turkey and Greece continue to prioritize strategic interests over UN-brokered compromise solutions.", theory: "Realism", explanation: "Realism explains the stalemate through the lens of power politics — states (Greece, Turkey, UK) use Cyprus to serve their own strategic interests." },
    { statement: "The apartheid regime collapsed not only due to internal resistance but because international sanctions changed the cost-benefit calculation for the South African government.", theory: "Liberalism", explanation: "Liberal IR emphasizes how international pressure, economic sanctions, and diplomatic isolation created incentives for policy change." },
    { statement: "Race has been a foundational ordering principle of the international system — from the colonial 'standard of civilization' to today's securitization of Muslim migrants.", theory: "Post-colonialism", explanation: "Shilliam and other postcolonial scholars argue that race has structured the international order throughout its history, not just as a domestic issue." },
    { statement: "The identity of Turkish and Greek Cypriots is not fixed — it has been socially constructed through education, media, and political elites, and could be reconstructed to enable peace.", theory: "Constructivism", explanation: "Constructivism opens the possibility for identity change — if identities are constructed, they can be reconstructed through dialogue, reconciliation, and new shared narratives." }
  ],

  /* ── THEORY EXPLORER DATA ───────────────────────────── */
  theoryLenses: {
    globalization: {
      realism: "Globalization does not eliminate the state. Great powers still shape global economic rules to serve their national interests. The backlash against globalization reflects states reasserting sovereignty.",
      liberalism: "Globalization represents unprecedented interdependence that creates strong incentives for cooperation and institutional governance. Free trade and international institutions promote peace.",
      marxism: "Globalization is capitalism going global — it increases inequality between and within nations, concentrating wealth in the Global North while exploiting workers in the South.",
      constructivism: "Globalization is not just material — it involves changing identities and norms. Global culture, cosmopolitanism, and shared risks (like climate change) reshape how states see themselves.",
      feminism: "Globalization has gendered effects: it exploits women's labor in export-processing zones while exporting particular gender norms. Women's experiences are central to understanding globalization's real impact.",
      postcolonialism: "Globalization continues patterns of colonial exploitation under new institutional forms. The rules of global trade, finance, and governance reflect the interests of former colonial powers."
    },
    un: {
      realism: "The UN reflects the power hierarchy of 1945. The P5 veto ensures great powers never act against their interests. When states comply, it serves their interests; when they don't, the UN is ignored.",
      liberalism: "The UN is the most ambitious experiment in multilateral governance. Despite its flaws, it provides a forum for diplomacy, promotes norms, delivers humanitarian aid, and maintains peacekeeping.",
      marxism: "The UN Security Council structure systematically favors capitalist great powers. IMF and World Bank (part of the UN family) impose neoliberal conditions that benefit Western corporations.",
      constructivism: "The UN creates and sustains global norms through resolutions, conferences, and declarations. It constructs shared understandings of sovereignty, human rights, and legitimate use of force.",
      feminism: "The UN has taken important steps on gender through R1325, CEDAW, and UN Women, but women remain underrepresented in peacekeeping and senior leadership. The UN system still privileges male perspectives.",
      postcolonialism: "The UN was founded by colonial powers and its Charter protected existing territorial arrangements (many colonial). Decolonization happened despite, not because of, the UN system."
    },
    gender: {
      realism: "Mainstream realism ignores gender — states are treated as unitary rational actors. However, women's inclusion in peace processes could be analyzed as improving negotiation efficiency.",
      liberalism: "Liberal feminism argues for equal inclusion of women in existing institutions. More women in diplomacy, peacekeeping, and leadership would improve outcomes through diverse perspectives.",
      marxism: "Gender inequality under capitalism links women's unpaid reproductive labor to market exploitation. Capitalist globalization both oppresses women and creates conditions for feminist mobilization.",
      constructivism: "Gender norms are socially constructed and vary across cultures and time. They shape who speaks in security debates, whose security matters, and what counts as a security threat.",
      feminism: "Feminist IR exposes the masculine bias of mainstream theories — war, power, and the state are coded as masculine while care, emotion, and the private sphere are coded as feminine and excluded.",
      postcolonialism: "Western feminist discourse can marginalize non-Western women's perspectives. Intersectionality (race, class, gender, colonialism) is essential to understanding women's global experiences."
    },
    race: {
      realism: "Realism historically ignored race, treating states as racially neutral rational actors. But colonial-era power politics was structured by racial hierarchies that realists simply took as given.",
      liberalism: "Liberal internationalism promised universal rights but historically excluded non-white peoples. Post-WWII liberalism has been more inclusive, but the legacy of racial exclusion remains in institutional structures.",
      marxism: "Race under capitalism functions as a tool of economic exploitation. Slavery and colonialism were forms of racial capitalism. Contemporary Global South exploitation continues these patterns.",
      constructivism: "Race is socially constructed — it has no biological basis but has enormous political consequences. Racial identities and hierarchies can be deconstructed and resisted through political struggle.",
      feminism: "Intersectionality (Kimberlé Crenshaw) shows that race and gender combine to produce distinct experiences. Black women's experiences are erased by feminist movements focused only on white women.",
      postcolonialism: "Race is central to postcolonial IR. The 'standard of civilization' used to justify colonialism was racial. Contemporary racial hierarchies in migration, security, and development continue colonial patterns."
    },
    humanrights: {
      realism: "Human rights are a tool of foreign policy, not a universal norm. Powerful states invoke human rights selectively to legitimate intervention. Sovereignty takes priority over humanitarian intervention.",
      liberalism: "Human rights represent genuine universal values that transcend sovereignty. International human rights law and institutions have progressively constrained state abuse. R2P extends this logic.",
      marxism: "Human rights discourse protects bourgeois civil and political rights while ignoring social and economic rights (food, housing, health). It serves capitalist hegemony while ignoring structural injustice.",
      constructivism: "Human rights norms spread through processes of socialization, shaming, and learning. The spread of human rights represents genuinely changing norms, not just power politics.",
      feminism: "Traditional human rights discourse focused on public sphere rights, ignoring violence against women, reproductive rights, and economic exploitation. A feminist approach centers women's rights as human rights.",
      postcolonialism: "Universal human rights are critiqued as Western cultural imperialism. Their universality claim ignores how colonial powers violated the rights of colonized peoples while preaching civilizational standards."
    },
    environment: {
      realism: "Environmental governance fails because states prioritize short-term national interests over collective action. Great powers (US, China) shape climate negotiations to protect economic competitiveness.",
      liberalism: "International environmental regimes (Paris Agreement, UNFCCC) demonstrate that states can cooperate on common problems. Institutions, science, and NGOs drive progress.",
      marxism: "Climate change is a product of capitalist overconsumption and fossil fuel interests. The Global South suffers most while the Global North bears responsibility. Climate justice requires systemic change.",
      constructivism: "Environmental norms have evolved significantly — the Anthropocene is a new shared understanding of human impact. Norm entrepreneurs and epistemic communities drive international environmental governance.",
      feminism: "Women in the Global South bear the greatest burden of climate change but are least represented at negotiating tables. Gender-responsive climate policy is both just and more effective.",
      postcolonialism: "Climate change reflects a legacy of colonial extraction. The Global South did not cause the crisis but suffers most. Climate justice requires reparations and technology transfer from North to South."
    },
    cyprus: {
      realism: "The Cyprus conflict reflects great-power competition — Greece, Turkey, and the UK use Cyprus to serve their strategic interests. The UN mediates but cannot override power politics.",
      liberalism: "EU membership and international mediation provide the best hope for resolution. The Annan Plan represented a liberal institutional approach. Continued engagement can produce a settlement.",
      marxism: "The Cyprus conflict is partly about economic interests — control of offshore gas reserves and tourism revenue. Class interests within each community complicate simple ethnic framing.",
      constructivism: "Greek Cypriot and Turkish Cypriot identities are socially constructed and politically maintained. Changing educational narratives, cross-community contact, and new political leadership could reshape identities toward reconciliation.",
      feminism: "The conflict has had gendered consequences — missing persons, displacement, and restricted movement affect women and men differently. Women peacebuilders have been active but largely excluded from official negotiations.",
      postcolonialism: "British colonial rule in Cyprus deliberately cultivated divisions (divide and rule) to maintain control. The 1960 settlement (Zurich-London Agreements) protected British military bases over Cypriot self-determination."
    },
    nato: {
      realism: "NATO is a traditional military alliance designed to balance Soviet/Russian power. Members free-ride on American military spending. NATO expansion reflects U.S. power projection, not liberal values.",
      liberalism: "NATO is a community of democracies that demonstrates collective security works. It has expanded and adapted, demonstrating institutions' durability.",
      marxism: "NATO serves Western capitalist interests — it protects markets, resources, and investment flows for Western corporations and enables 'liberal' intervention in resource-rich regions.",
      constructivism: "NATO is held together by shared democratic identity and liberal norms, not just material interests. Its expansion reflects the spread of a 'zone of stable peace' identity.",
      feminism: "NATO's security is defined in masculine military terms. Women are underrepresented in NATO militaries and decision-making. Feminist security studies questions whether NATO's approach makes women safer.",
      postcolonialism: "NATO's interventions (Kosovo, Libya, Afghanistan) are viewed by some as neo-colonial — Western powers claiming the right to use force in the Global South under humanitarian pretexts."
    },
    climate: {
      realism: "Climate negotiations reflect power politics — the US and China set the parameters of any possible agreement. Binding commitments are avoided because states prioritize sovereignty and economic growth.",
      liberalism: "The Paris Agreement demonstrates that multilateral cooperation on climate is possible. International institutions, civil society, and scientific consensus drive progress toward a post-carbon global economy.",
      marxism: "Climate change is caused by capitalist fossil-fuel dependence and will not be solved without fundamental economic transformation. Market-based solutions (carbon trading) serve corporate interests.",
      constructivism: "Scientific consensus on climate change represents a new collective understanding that has progressively changed state identities and obligations. Norms around carbon neutrality are spreading globally.",
      feminism: "Women, especially in the Global South, are most vulnerable to climate impacts. Gender-responsive climate finance and women's leadership in climate governance are both just and more effective.",
      postcolonialism: "The Global South faces the worst climate impacts from emissions produced mainly by the Global North. Climate justice requires historical accountability, reparations, and technology transfer."
    }
  },

  /* ── ESSAY SCRAMBLE PARAGRAPHS ─────────────────────── */
  scrambleParagraphs: [
    {
      topic: "UN Security Council Reform",
      sentences: [
        { id: "s1", role: "P", text: "The UN Security Council must be reformed to reflect contemporary global power distributions.", order: 0 },
        { id: "s2", role: "E", text: "The Council's five permanent members — the United States, United Kingdom, France, Russia, and China — were determined by the outcome of World War II, not today's political realities.", order: 1 },
        { id: "s3", role: "E2", text: "Emerging powers such as India, Brazil, Germany, and African nations are excluded from permanent membership despite their significant economic and demographic weight.", order: 2 },
        { id: "s4", role: "X", text: "This exclusion undermines the Council's legitimacy and effectiveness, particularly in addressing conflicts in the Global South where the current P5 often have conflicting interests.", order: 3 },
        { id: "s5", role: "L", text: "Without reform, the Security Council risks becoming increasingly irrelevant to the global challenges of the 21st century.", order: 4 }
      ]
    },
    {
      topic: "Globalization and Inequality",
      sentences: [
        { id: "g1", role: "P", text: "Globalization has produced significant economic inequality both between and within nations.", order: 0 },
        { id: "g2", role: "E", text: "According to Baylis, Smith and Owens, the benefits of global economic integration have been unevenly distributed, with core capitalist nations capturing disproportionate gains.", order: 1 },
        { id: "g3", role: "E2", text: "The Gini coefficient measuring global inequality has widened considerably since the acceleration of globalization in the 1990s.", order: 2 },
        { id: "g4", role: "X", text: "A Marxist analysis would attribute this inequality to the structural dynamics of capitalism, where surplus value extracted from peripheral economies accumulates in the global core.", order: 3 },
        { id: "g5", role: "L", text: "This analysis suggests that addressing global inequality requires not merely more globalization but fundamental reforms to its rules and governance.", order: 4 }
      ]
    },
    {
      topic: "Race and International Order",
      sentences: [
        { id: "r1", role: "P", text: "Race has functioned as a foundational ordering principle of the international system, not merely a domestic political issue.", order: 0 },
        { id: "r2", role: "E", text: "Shilliam argues in Baylis, Smith and Owens that the 'standard of civilization' used to justify colonial conquest and governance was explicitly racial, determining which peoples were considered capable of self-governance.", order: 1 },
        { id: "r3", role: "E2", text: "The international community's response to Haiti's revolutionary independence — including France's demand for reparations and decades of diplomatic isolation — illustrates how racial hierarchies shaped international recognition.", order: 2 },
        { id: "r4", role: "X", text: "While explicit biological racism was discredited after World War II, cultural racism — the claim that certain cultures are incompatible with liberal democracy — continues to structure migration policies and security discourses.", order: 3 },
        { id: "r5", role: "L", text: "Therefore, any comprehensive analysis of international relations must engage seriously with race as an analytical category, not treat it as a peripheral concern.", order: 4 }
      ]
    }
  ]
};
