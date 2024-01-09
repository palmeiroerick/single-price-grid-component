import Button from "@/components/Button";
import Section from "@/components/Section";
import Text from "@/components/Text";

const Home = () => {
  return (
    <main className="w-80 overflow-hidden rounded">
      <Section color="white">
        <Text as="h1" weight="bold" size="xl" color="cyan">
          Join our community
        </Text>
        <Text as="h3" weight="bold" size="base" color="brightYellow">
          30-day, hassle-free money back guarantee
        </Text>
        <Text as="p" weight="normal" size="sm" color="grayishBlue">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </Text>
      </Section>
      <Section color="cyan">
        <Text as="h2" weight="bold" size="xl" color="white">
          Monthly Subscription
        </Text>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Text as="h3" weight="bold" size="3xl" color="white">
              $29
            </Text>
            <Text as="p" weight="normal" size="base" color="lightGray">
              per month
            </Text>
          </div>
          <Text as="p" weight="normal" size="base" color="white">
            Full access for less than $1 a day
          </Text>
        </div>
        <Button>Sign Up</Button>
      </Section>
      <Section color="lightCyan">
        <Text as="h2" weight="bold" size="xl" color="white">
          Why Us
        </Text>
        <div>
          <Text as="p" weight="normal" size="sm" color="lightGray">
            Tutorials by industry experts
          </Text>
          <Text as="p" weight="normal" size="sm" color="lightGray">
            Peer & expert code review
          </Text>
          <Text as="p" weight="normal" size="sm" color="lightGray">
            Coding exercises
          </Text>
          <Text as="p" weight="normal" size="sm" color="lightGray">
            Access to our GitHub repos
          </Text>
          <Text as="p" weight="normal" size="sm" color="lightGray">
            Community forum
          </Text>
          <Text as="p" weight="normal" size="sm" color="lightGray">
            Flashcard decks
          </Text>
          <Text as="p" weight="normal" size="sm" color="lightGray">
            New videos every week
          </Text>
        </div>
      </Section>
    </main>
  );
};

export default Home;
