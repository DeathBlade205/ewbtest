import SectionHero from '@/components/SectionHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function GroupCharter() {
  return (
    <div>
      <SectionHero title="Appendix 1: Group Charter" subtitle="Ground rules, goals, leadership, and the team's commitment to working together as One Prompt Wonders." />
      <div className="px-8 md:px-14 py-12 max-w-3xl">
        <div className="prose">
          <ScrollReveal>
            <p><strong>Group Name:</strong> One Prompt Wonders</p>
          </ScrollReveal>

          <ScrollReveal delay={0.04}>
            <h3>Our Ground Rules</h3>
            <ul>
              <li><em>Other than in class, when will we meet (what time, how often)?</em> Once a week at 11am when everyone's available.</li>
              <li><em>On average, how long should our meetings be?</em> 30–60 minutes.</li>
              <li><em>Where will our meetings take place?</em> At UTS.</li>
              <li><em>How do we inform each other when we can't be there or are running late?</em> Instagram group chat.</li>
              <li><em>What does "on time" mean?</em> Arrive at the specified time.</li>
              <li><em>How will we deal with lateness to meetings?</em> Communicate with others and reschedule following meetings if required.</li>
              <li><em>How do we deal with members who don't participate enough, participate too much, or distract the group from its task?</em> We will respectfully address the issue and agree on adjustments to keep the group productive.</li>
              <li><em>What will we do if a group member's work doesn't meet our standards?</em> We will give clear feedback and ask for revisions by an agreed-upon deadline.</li>
              <li><em>How are we going to make decisions?</em> Making sure each group member has a say and each decision is a joint one.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h3>Our Goals</h3>
            <p>What is our group trying to accomplish? Leadership.</p>
            <ul>
              <li><em>Will we appoint a leader?</em> Yes.</li>
              <li><em>Who?</em> Ronit Jain.</li>
              <li><em>What are their responsibilities?</em> Organise meetings and make sure the project is progressing at an acceptable pace.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h3>Our Commitment to the Charter</h3>
            <p>We, the group named, agree with the answers in our charter and will try our best to uphold them.</p>
            <p><strong>Signatories:</strong> Ronit Jain, Sadat Sagar, Mitchell Harris, Luc Le Moenic, Alexander Chen, Khushi Sharma.</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
