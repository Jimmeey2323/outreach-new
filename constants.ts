import type { JourneyPhase } from './types';

export const JOURNEY_MAP: JourneyPhase[] = [
  {
    id: 'phase0',
    title: 'Phase 0: Lead Ingestion & Instant Triage',
    description: 'The process begins the instant a high-value lead is received, ensuring rapid and accurate classification to tailor the outreach from the very first moment.',
    steps: [
      {
        id: 'step0.0',
        title: 'Lead Receipt',
        timeline: 'Instantaneous',
        action: 'A new lead is received from a Tier 1 source (Client Referral, Website Form, Walk-in, Hosted Class Attendee). An automated notification is sent to the designated sales team member.',
        comms: 'Internal System (CRM, Email/WhatsApp notification)',
        logic: 'Speed is paramount. The goal is to move from lead creation to initial outreach in under 5 minutes. This first step ensures the right person is alerted immediately to begin the process.',
      },
      {
        id: 'step0.1',
        title: 'Triage & Classification',
        timeline: 'Within 1-5 minutes',
        action: 'The sales team member immediately reviews and classifies the lead in the CRM.',
        comms: 'Internal CRM / Notes',
        logic: 'This rapid classification ensures the very first message is personalized and strategically aligned with the lead\'s likely intent and communication preference. It prevents a generic outreach and sets the stage for a premium, tailored experience.',
        details: [
          'Source Classification: HOT (Referrals, Walk-ins), WARM (Website forms w/ phone).',
          'Format Interest Detection: Barre → Free Trial, Cycle/Strength → Newcomer Pack.',
          'Communication Channel Priority: Phone # → WhatsApp Primary, Email only → Email Primary.',
        ],
      },
    ],
  },
  {
    id: 'phase1',
    title: 'Phase 1: Immediate Engagement & Rapport',
    description: 'Capitalize on peak interest with a swift, personalized first contact that makes the lead feel valued and opens a direct line of communication.',
    steps: [
        {
            id: 'step1.1',
            title: 'The First Touchpoint',
            timeline: 'Within 5 minutes of Triage',
            action: 'Send the initial, personalized welcome message based on the lead\'s expressed interest.',
            comms: 'WhatsApp (Primary) or Email',
            logic: 'An immediate, warm message confirms their inquiry was received, makes them feel valued, and engages them before they get distracted or research competitors.',
            templates: [
              {
                title: 'For BARRE Interest',
                channel: 'WhatsApp',
                content: `Hi [Name]! ✨\n\nWelcome to the Physique 57 family! I'm [Your Name] from our [Location] studio.\n\nI saw you're interested in trying our signature barre method - such an exciting choice! Our barre classes are designed to sculpt, strengthen, and transform your body in the most efficient way possible.\n\nBefore I share all the details, I'd love to understand what drew you to barre? Are you looking to:\n🎯 Tone and sculpt specific areas?\n💪 Build lean strength without bulk?\n🧘‍♀️ Find a mindful yet challenging workout?\n⚡ Boost energy and confidence?\n\nLet's chat for just 5 minutes so I can recommend the perfect class and instructor for your goals! When would be a good time for a quick call today or tomorrow?\n\nCan't wait to welcome you to the studio!\n[Your Name] 💕`
              },
              {
                title: 'For CYCLE/STRENGTH Interest',
                channel: 'WhatsApp',
                content: `Hi [Name]! 🚴‍♀️💪\n\nThank you for your interest in Physique 57! I'm [Your Name] from our [Location] studio.\n\nI see you're drawn to our high-energy [Cycle/Strength] classes - you have amazing taste! These formats deliver incredible results and such an empowering community experience.\n\nI'd love to learn more about your fitness goals so I can guide you to the perfect class intensity and instructor. Are you:\n🔥 Looking for high-intensity cardio that's also fun?\n💪 Wanting to build serious strength in a supportive environment?\n🎯 Seeking a complete body transformation?\n⚡ Ready to join Mumbai's most motivating fitness community?\n\nI have an exclusive newcomer offer that's perfect for you - let's chat for 5 minutes so I can share the details and find your ideal class time!\n\nWhen works better - today evening or tomorrow morning?\n\nExcited to help you start this journey!\n[Your Name] ⚡`
              },
              {
                title: 'For GENERAL FITNESS Inquiry',
                channel: 'WhatsApp',
                content: `Hi [Name]! ✨\n\nWelcome to Physique 57! I'm [Your Name] from our [Location] studio.\n\nI'm so excited you're considering joining our community of strong, confident women! We have three incredible formats that deliver amazing results:\n\n🎯 BARRE: Sculpting & toning (think dancer's body)\n🚴‍♀️ CYCLE: High-energy cardio with strength\n💪 STRENGTH: Powerful full-body conditioning\n\nRather than guess what might work best, let's have a quick 5-minute chat about your goals, schedule, and what type of energy motivates you most. I promise to be honest about which format will give you the results you're looking for!\n\nAre you free for a call today evening or tomorrow morning?\n\nCan't wait to help you find your perfect fit!\n[Your Name] 💕`
              }
            ]
        },
        {
            id: 'step1.2',
            title: 'First Follow-Up',
            timeline: 'If no response within 6 hours',
            action: 'Send a brief, non-pushy follow-up message using social proof.',
            comms: 'WhatsApp or Email',
            logic: 'This serves as a gentle reminder while simultaneously building credibility and relatability. Using a story of a similar member lowers resistance and makes the brand feel more accessible.',
            templates: [
              {
                title: '6-Hour Follow-up',
                channel: 'WhatsApp',
                content: `Hi [Name],\n\nI know you're probably busy! I just wanted to share something exciting - one of our members, [Similar demographic member], just hit her 3-month milestone and the transformation is incredible!\n\nShe started exactly where you might be now - curious about whether this would work for her busy lifestyle.\n\nNo pressure at all, but I'd still love that quick chat when you have 5 minutes.\n\nWhat's the best way to reach you - call, WhatsApp, or would you prefer I email some info first?\n\nHere for you,\n[Your Name] ✨`
              }
            ]
        }
    ]
  },
  {
    id: 'phase2',
    title: 'Phase 2: Discovery & Value Building',
    description: 'Transition from a salesperson to a trusted advisor by deeply understanding the lead\'s goals and demonstrating value through a pattern-interrupting approach.',
    steps: [
        {
            id: 'step2.1',
            title: 'The Discovery Call / Value Message',
            timeline: 'Day 2',
            action: 'Deepen the connection and formally present the solution. If they responded to Phase 1, initiate a Discovery Phone Call. If not, send a pattern-interrupting value message (video/audio).',
            comms: 'Phone Call or WhatsApp with Media',
            logic: 'A voice call builds significant rapport. For a silent lead, a video/audio message is highly personal, stands out, and conveys passion, aiming to re-ignite interest by providing value without asking for anything in return.',
            templates: [
              {
                title: 'Value Message (If No Response)',
                channel: 'WhatsApp',
                content: `Hi [Name] 👋\n\nI hope you're having a great day! I realize my first message might have gotten lost in your busy schedule.\n\nI recorded a quick message about why Physique 57 might be exactly what you're looking for: [Pre-recorded 90-second audio from instructor explaining the method and community]\n\nPlus, I found this transformation story from [Similar member name/profile] that I think you'll find inspiring: [Link to testimonial video]\n\nNo obligation, but I'm here when you're ready for that chat!\n\nBest,\n[Your Name] 💪`
              }
            ]
        }
    ]
  },
  {
    id: 'phase3',
    title: 'Phase 3: The Experience - Trial & In-Studio Conversion',
    description: 'The most critical phase for converting a warm lead into a paying member through a flawlessly executed in-studio experience and immediate post-class follow-up.',
    steps: [
        {
            id: 'step3.1',
            title: 'Pre-Trial Optimization',
            timeline: 'T-24 Hours & T-2 Hours',
            action: 'Proactively manage the lead\'s experience before they even arrive with two strategic messages.',
            comms: 'WhatsApp',
            logic: 'This two-part communication strategy dramatically reduces no-shows, eases first-timer anxiety, and builds excitement, reinforcing the premium nature of the brand.',
            templates: [
              {
                title: 'T-24 Hours Before Trial',
                channel: 'WhatsApp',
                content: `Hi [Name]! 🌟\n\nTomorrow's the big day! I'm genuinely excited for you to experience what makes Physique 57 so special.\n\nQuick prep checklist:\n✅ Comfortable workout clothes (form-fitting preferred for proper form feedback)\n✅ Water bottle (stay hydrated!)\n✅ Arrive 15 minutes early (I want to personally welcome you)\n✅ Positive energy (that's the most important thing!)\n\nTonight's homework: Get a good night's sleep and maybe do some light stretching. Your body will thank you tomorrow!\n\nI'll be there to greet you personally. Any last-minute jitters or questions?\n\nSee you bright and early! 💪✨\n\nP.S. - [Instructor Name] is SO excited to meet you. She's planned the perfect modifications to make your first class amazing.`
              },
              {
                title: 'T-2 Hours Before (Morning Of)',
                channel: 'WhatsApp',
                content: `Good morning [Name]! ☀️\n\nToday's your day! I woke up excited knowing you're about to discover something incredible about yourself.\n\nJust confirmed with [Instructor Name] - she's ready to give you the royal treatment! 👑\n\nStudio reminder:\n📍 [Address] - Park in the visitor spots\n⏰ Be there by [15 min before class time]\n📱 My direct number: [Number] - Call if you need ANYTHING\n\nFun fact: 87% of our members say their first class exceeded expectations. I have a feeling you'll be in that group!\n\nCan't wait to hear all about it afterward! 🎉`
              }
            ]
        },
        {
            id: 'step3.2',
            title: 'The In-Studio Experience',
            timeline: 'Day of Trial',
            action: 'Curate a flawless and welcoming in-person experience from the moment they arrive.',
            comms: 'In-Person',
            logic: 'The first 5 minutes in the studio set the tone. The goal is to make them feel like a VIP and a welcome member of the "family" before the class even begins.',
        },
        {
            id: 'step3.3',
            title: 'The Post-Trial Conversion',
            timeline: 'Within 5 Minutes of Class End',
            action: 'Capitalize on the post-workout high to close the sale.',
            comms: 'In-Person',
            logic: 'Endorphins and positive emotions are at their peak. The conversation should focus on the feeling they have *right now* and frame membership as the way to make that feeling a regular part of their life.',
            templates: [
              {
                title: 'Post-Trial Conversion Script',
                channel: 'In-Person',
                content: `High-Energy Approach:\n"[Name]! Oh my God, look at you! You're absolutely glowing! I was watching and you were CRUSHING it in there! Especially during [specific exercise]... How do you feel right now?"\n\nDiscovery Questions (While endorphins are high):\n1. "What surprised you most about the class?"\n2. "How did that compare to what you expected?"\n3. "What part challenged you in the best way?"\n4. "Could you see yourself doing this regularly?"\n\nThe Soft Close:\n"[Name], I have to be honest - I see something special in you... We have a few membership options, and I'd love to find one that fits perfectly. Do you have 5 minutes right now...?"`
              }
            ]
        }
    ]
  },
  {
    id: 'phase4',
    title: 'Phase 4: Educational Nurture & Urgency',
    description: 'For leads who have engaged but not yet booked a trial, this phase addresses logical objections with educational content and creates a clear, low-friction call to action.',
    steps: [
        {
            id: 'step4.1',
            title: 'The Value-Driven Email & Follow-Up',
            timeline: 'Day 4-5',
            action: 'Shift from direct conversation to providing authoritative, educational content about the "science" behind the method, then follow up with a concise summary.',
            comms: 'Email (Primary), then WhatsApp',
            logic: 'This addresses rational objections by proving efficiency and value. Using email allows them to consume the information on their own terms, followed by a gentle WhatsApp nudge to summarize and prompt action.',
            templates: [
              {
                title: 'Value-Driven Educational Email',
                channel: 'Email',
                content: `Subject: "The Science Behind Why Barre/Cycle Works So Well for Busy Professionals"\n\nHi [Name],\n\nI've been thinking about our earlier conversation (or "your inquiry about Physique 57"), and I wanted to share something that might interest you.\n\nMany of our members are successful women like yourself who initially questioned whether they had time for another commitment. What they discovered is that our method actually SAVES time while delivering better results than traditional gym routines.\n\nHere's why:\n\n🧬 The 45-Minute Science: Our classes combine strength, cardio, and flexibility in one efficient session.\n\n📈 The Compound Effect: We target multiple muscle groups simultaneously, so you're building lean muscle that burns calories 24/7.\n\n🎯 The Precision Factor: Small, controlled movements mean maximum impact with minimum risk of injury or burnout.\n\nIf you're curious to experience this firsthand, I'm holding a few spots for new members this week. Would you prefer to try our signature barre class (complimentary) or our high-energy cycle format (special newcomer rate)?\n\nLet me know what questions you have!\n\nBest,\n[Your Name]`
              },
              {
                title: 'WhatsApp Follow-Up Nudge',
                channel: 'WhatsApp',
                content: `Hi [Name] - did you get a chance to check out that email about the science behind our method?\n\nI know information overload is real, so here's the simple version: 45 minutes, 3x per week = better results than anything you've tried before.\n\nPlus you join an incredible community of driven women who motivate each other to show up consistently.\n\nReady to try it? I have [specific class time] available tomorrow with [instructor name] - she's perfect for beginners and has such positive energy!\n\nLet me know! ⚡`
              }
            ]
        }
    ]
  },
  {
    id: 'phase5',
    title: 'Phase 5: The Final Invitation',
    description: 'The final, direct attempt to convert an engaged lead with a heartfelt, risk-free offer before moving them to a long-term nurture sequence.',
    steps: [
        {
            id: 'step5.1',
            title: 'The Honest & Direct Offer',
            timeline: 'Day 10-12',
            action: 'Send a heartfelt, direct message that addresses potential hesitation and makes an irresistible, risk-free offer.',
            comms: 'WhatsApp',
            logic: 'This approach cuts through sales-speak. It focuses on the emotional transformation ("how they FEEL") and removes all risk with a personal guarantee, forcing a decision by being vulnerable and value-focused.',
            templates: [
              {
                title: 'Honest & Direct Offer',
                channel: 'WhatsApp',
                content: `Hi [Name],\n\nI don't want to keep messaging if you're not interested, but I also don't want you to miss out on something that could genuinely transform your routine and confidence.\n\nHere's what I know: Most women who try Physique 57 wish they'd started sooner. Not because of how they look (though the physical changes are amazing), but because of how they FEEL.\n\nMore energy. Better posture. Stronger in their bodies and their daily life.\n\nIf timing isn't right now, I totally understand. Life gets busy.\n\nBut if you're hesitating because you're not sure it's "for you" or worry about keeping up - I promise you, we've designed this method for women exactly like you.\n\nI'm offering you my personal guarantee: Try one class. If you don't leave feeling accomplished and excited about what's possible, I'll refund you personally.\n\nJust say "YES" and I'll book you for tomorrow or whenever works!\n\nIf not, no worries - I'll stop reaching out but you'll always be welcome here.\n\nWhat do you say? ✨\n\n[Your Name]`
              }
            ]
        },
        {
            id: 'step5.2',
            title: 'The Final Call',
            timeline: 'If no response after 48 hours',
            action: 'Make one last attempt via a phone call to understand their hesitation directly.',
            comms: 'Phone Call',
            logic: 'This is the highest-effort final touchpoint, demonstrating genuine commitment and providing a last chance to overcome unstated objections. It provides clear closure.',
            templates: [
              {
                title: 'Final Call Script',
                channel: 'Phone Call',
                content: `"Hi [Name], this is [Your Name] from Physique 57. I've been trying to connect with you about starting your fitness journey with us. I realize you might not be ready right now, and that's completely okay. I just wanted to make one final offer because I believe this method would be transformative for you. Can I ask - is it timing, price, or something else that's holding you back? I'd love to address any concerns directly... [Listen and respond accordingly]... If now isn't the right time, I'll add you to our monthly newsletter so you stay connected to our community. Does that sound good?"`
              }
            ]
        }
    ]
  },
   {
    id: 'phase6',
    title: 'Phase 6: Conversion & Seamless Onboarding',
    description: 'A smooth and celebratory transaction process that validates the new member\'s decision and sets them up for long-term success and retention.',
    steps: [
        {
            id: 'step6.1',
            title: 'Effortless Conversion',
            timeline: 'Immediate',
            action: 'The lead says "YES" and makes a purchase. The process must be simple and fast.',
            comms: 'In-Person / WhatsApp Payment Link / Email Confirmation',
            logic: 'A seamless transaction followed by an immediate, structured welcome process reduces buyer\'s remorse and validates their decision.',
        }
    ]
  },
  {
    id: 'phase7',
    title: 'Phase 7: Long-Term Nurture',
    description: '"No for now" doesn\'t mean "no forever." This sequence keeps the brand top-of-mind by providing consistent value without a hard sell.',
    steps: [
        {
            id: 'step7.1',
            title: 'Nurture Sequence',
            timeline: '14+ Days',
            action: 'The lead is marked as "Nurture" in the CRM and added to a long-term communication strategy.',
            comms: 'Email, Occasional WhatsApp',
            logic: 'When the lead\'s timing, budget, or motivation changes, Physique 57 will be their first thought.',
            details: [
                'Monthly Newsletter: Member spotlights, tips, news.',
                'Seasonal Offers: Targeted campaigns.',
                'Event Invitations: Workshops, challenges, open houses.',
                'Quarterly Personal Check-in: A simple, non-salesy "Hey, how are you?" message.'
            ]
        }
    ]
  },
   {
    id: 'phase8',
    title: 'Phase 8: Post-Purchase Engagement & Growth',
    description: 'The sale is the beginning, not the end. This ongoing phase transforms a new customer into a loyal advocate and a source for new high-value leads.',
    steps: [
        {
            id: 'step8.1',
            title: 'Member Nurturing & Growth',
            timeline: 'Ongoing from Day 1',
            action: 'Actively nurture the new member to ensure retention, satisfaction, and growth.',
            comms: 'In-Person, Email, WhatsApp, Social Media',
            logic: 'A structured post-purchase journey drives results, builds community belonging, and identifies opportunities for increased lifetime value and referrals.',
             details: [
                'First 30 Days: Check-ins and milestone celebrations.',
                'Community Integration: Introductions to staff and other members.',
                'Cross-Format Conversion: Introduce complementary formats after 4-6 weeks.',
                'Referral Program: Proactively ask for referrals after positive milestones.'
            ]
        }
    ]
  }
];


export const TIER2_JOURNEY_MAP: JourneyPhase[] = [
  {
    id: 'tier2-phase1',
    title: 'Phase 1: The Instant Value Drip',
    description: 'Automatically deliver value and filter for immediate intent within the first 24 hours. Any engagement triggers a "Hot Transfer" to the Tier 1 process.',
    steps: [
      {
        id: 'tier2-step1.1',
        title: 'Instant Auto-Welcome & Value',
        timeline: '< 5 minutes',
        action: 'Send an automated WhatsApp message with a high-energy, inspirational sizzle reel video.',
        comms: 'Auto-WhatsApp',
        logic: 'This provides instant engagement with exciting visual content, capturing attention at the peak of their curiosity. The primary goal is to elicit a response.',
        templates: [
          {
            title: 'Welcome Video Message',
            channel: 'WhatsApp',
            content: "Welcome to the Physique 57 community, [Name]! 🎉 We're so glad you found us. Ever wondered how you can get long, lean muscles and a dancer's posture? It starts here! Check out this 60-second video to see the P57 magic in action: [Link to HIGH-ENERGY, inspirational sizzle reel]"
          }
        ]
      },
      {
        id: 'tier2-step1.2',
        title: 'Educational Follow-Up',
        timeline: '+24 Hours',
        action: 'Send an automated email or WhatsApp broadcast that challenges common fitness assumptions and provides intellectual proof of the method\'s effectiveness.',
        comms: 'Auto-Email/WhatsApp Broadcast',
        logic: 'This touchpoint aims to educate and build authority by linking to valuable content like a blog post. It positions the brand as an expert resource.',
        templates: [
          {
            title: 'Educational Content (Email)',
            channel: 'Email',
            content: "Subject: Forget everything you know about fitness...\n\nHi [Name], great to have you with us. Most people think you need to spend hours in the gym to see results. Our method proves otherwise. Here's how 57 minutes can transform your body and mind: [Link to a blog: 'The Science Behind the 57 Minutes']"
          },
          {
            title: 'Educational Content (WhatsApp)',
            channel: 'WhatsApp',
            content: "Hi [Name] 👋, forget everything you know about fitness...\n\nMost people think you need hours in the gym to see results. Our method proves otherwise.\n\nHere's how 57 minutes with us can transform your body and mind: [Link to a blog: 'The Science Behind the 57 Minutes']"
          }
        ],
        details: [
          'Hot Transfer Protocol: If the lead responds to ANY of these messages with anything other than "stop", a team member must immediately manually respond and transition them into the Tier 1 Qualification Call process.'
        ]
      },
    ]
  },
  {
    id: 'tier2-phase2',
    title: 'Phase 2: The 21-Day "See The Difference" Nurture Sequence',
    description: 'For leads who don\'t immediately engage, this fully automated drip campaign educates them on Physique 57\'s unique value, building know-like-trust over time.',
    steps: [
      {
        id: 'tier2-step2.1',
        title: 'Day 1: The Method Explained',
        timeline: 'Day 1 of Sequence',
        action: 'Deliver an animated explainer video that breaks down the P57 method.',
        comms: 'Automated WhatsApp/Email',
        logic: 'An animated video is easy to consume, feels premium, and clearly communicates the core value proposition without requiring the user to read long text.',
        templates: [
          {
            title: 'Day 1: The Method',
            channel: 'WhatsApp',
            content: "Hi [Name]! 👋 Why is Physique 57 different? It's a full-body workout that combines strength, cardio, and flexibility for transformative results. See how it works: [Link to an animated explainer video]"
          }
        ]
      },
      {
        id: 'tier2-step2.2',
        title: 'Day 4: The Client Story',
        timeline: 'Day 4 of Sequence',
        action: 'Share a relatable client transformation story, preferably a 90-second video testimonial.',
        comms: 'Automated WhatsApp/Email',
        logic: 'Using a client avatar that matches the target audience (e.g., a busy CEO) makes the results feel achievable and relatable, building social proof.',
        templates: [
          {
            title: 'Day 4: Client Story',
            channel: 'WhatsApp',
            content: "Meet [Client Name], a busy CEO and mom. She thought she was too busy to get fit. Watch her 90-day transformation story: [Link to a 90-sec video testimonial]"
          }
        ]
      },
      {
        id: 'tier2-step2.3',
        title: 'Day 7: The Mythbuster',
        timeline: 'Day 7 of Sequence',
        action: 'Send a link to an interactive piece of content (like an Instagram Reel or carousel) that debunks common myths about barre.',
        comms: 'Automated WhatsApp/Email',
        logic: 'This addresses potential objections in an engaging, high-energy format that is popular on social media, increasing the likelihood of interaction.',
        templates: [
          {
            title: 'Day 7: Mythbuster',
            channel: 'WhatsApp',
            content: "Think barre is easy? Think again. 💪 Swipe to see why our members are obsessed with the burn (and the results)! [Link to a carousel post/Reel: 1. Myth: It's just stretching, 2. Reality: We use weights...]"
          }
        ]
      },
      {
        id: 'tier2-step2.4',
        title: 'Day 11: The Trainer Tip',
        timeline: 'Day 11 of Sequence',
        action: 'Provide free, actionable advice from a head trainer in a short tutorial video.',
        comms: 'Automated WhatsApp/Email',
        logic: 'This builds authority and provides genuine value, positioning P57 as experts who care about the lead\'s well-being, not just their wallet.',
        templates: [
          {
            title: 'Day 11: Trainer Tip',
            channel: 'WhatsApp',
            content: "A little love from our team! ❤️ Here's Head Trainer [Name] with her #1 tip for mastering your plank and protecting your lower back. [Link to a 45-second tutorial video]"
          }
        ]
      },
      {
        id: 'tier2-step2.5',
        title: 'Day 14: The Community',
        timeline: 'Day 14 of Sequence',
        action: 'Showcase the vibrant community aspect by sharing a photo dump or video from a recent member event.',
        comms: 'Automated WhatsApp/Email',
        logic: 'This creates FOMO (Fear Of Missing Out) and highlights that P57 is more than just a workout—it\'s a social "third place."',
        templates: [
          {
            title: 'Day 14: The Community',
            channel: 'WhatsApp',
            content: "It's not just a workout, it's your third place. Here's a glimpse from our last member mixer! [Link to a photo dump/video of a studio event]"
          }
        ]
      },
      {
        id: 'tier2-step2.6',
        title: 'Day 18: Beyond the Barre',
        timeline: 'Day 18 of Sequence',
        action: 'Share holistic wellness content, such as a well-designed infographic on nutrition for recovery.',
        comms: 'Automated WhatsApp/Email',
        logic: 'This positions P57 as a comprehensive lifestyle brand that supports the member\'s entire wellness journey, not just the 57 minutes they are in the studio.',
        templates: [
          {
            title: 'Day 18: Nutrition Tip',
            channel: 'WhatsApp',
            content: "True transformation happens 24/7. What you do outside the studio matters! Here are 3 foods to fight inflammation and boost recovery: [Link to a well-designed infographic]"
          }
        ]
      },
       {
        id: 'tier2-step2.7',
        title: 'Day 21: The Invitation',
        timeline: 'Day 21 of Sequence',
        action: 'Make a low-barrier, high-value offer, such as an invitation to a free "Barre Basics" workshop.',
        comms: 'Automated WhatsApp/Email',
        logic: 'A free educational event feels less intimidating and less sales-focused than a trial class, providing an easy "yes" for a hesitant lead to re-engage.',
        templates: [
          {
            title: 'Day 21: The Invitation',
            channel: 'WhatsApp',
            content: "You've seen the method, the results, and the community. Now, it's your turn to experience it. We're hosting a FREE 'Barre Basics' Workshop this Saturday. The first 10 people to reply 'BARRE' get a spot. Will you be one of them?"
          }
        ]
      }
    ]
  },
  {
    id: 'tier2-phase3',
    title: 'Phase 3: Re-Engagement & Handling',
    description: 'Strategies for re-capturing the attention of non-responders and managing Tier 2 leads who express interest in person.',
    steps: [
      {
        id: 'tier2-step3.1',
        title: 'Quarterly Re-engagement Campaign',
        timeline: 'Quarterly',
        action: 'Run a campaign for leads who completed the nurture sequence but never engaged, offering a highly exclusive, time-sensitive opportunity.',
        comms: 'WhatsApp Broadcast / Email',
        logic: 'A new, exclusive offer (like a preview of a new class) can reignite interest. If a lead doesn\'t engage with two consecutive campaigns, they can be archived.',
        templates: [
          {
            title: 'Sample: "Alumni" Re-engagement',
            channel: 'WhatsApp',
            content: "Hi [Name], it's been a while! We're launching a NEW 'Sculpt & Strength' class series next month and are offering a preview to a small group. As part of our extended community, we wanted to give you first dibs on a complimentary spot. Reply 'NEW' if you'd like to join us."
          },
          {
            title: 'Sample: "Social Proof" Re-engagement',
            channel: 'WhatsApp',
            content: "Hi [Name]. We're featured in [Magazine Name] this month! 🎉 We're sharing a sneak peek of the article with our inner circle. Read it here: [Link to a PDF/gated page]. P.S. The article includes a discount code for our newcomers' pack, valid this week only. 😉"
          }
        ]
      },
      {
        id: 'tier2-step3.2',
        title: 'Handling Walk-in Tier 2 Leads',
        timeline: 'Immediate',
        action: 'For a walk-in who doesn\'t purchase, get their WhatsApp number, send the instant welcome video, and follow up manually within the hour to answer questions.',
        comms: 'In-Person, WhatsApp',
        logic: 'This bridges the in-person connection with the digital nurture flow, but adds a manual, personal touch to acknowledge their visit and maintain momentum.',
        templates: [
          {
            title: 'In-Person Script',
            channel: 'In-Person',
            content: `"It was so lovely to meet you! I'll send you our digital brochure and a special welcome message."`
          },
          {
            title: 'Manual 1-Hour Follow-Up',
            channel: 'WhatsApp',
            content: "So great to have you in the studio! Did you have any questions about the classes you saw on the schedule? I'm here to help."
          },
          {
            title: '+24 Hour Offer',
            channel: 'WhatsApp',
            content: "Hi [Name], was great chatting yesterday! We have a spot open in our [Class Name] tomorrow evening. I thought it might be a perfect fit for you. Would you like to try it with our newcomer offer?"
          }
        ]
      }
    ]
  }
];