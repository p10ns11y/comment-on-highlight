// vim: syntax=JSX
import React from 'react';

export default class Content extends React.Component {
  state = {
    editable: false
  }

  componentDidMount() {
    if (this.state.editable) this.contentContainer.focus();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.editable && this.state.editable) {
      this.contentContainer.focus();
    }
  }

  bubbleUpEditableSelectedRegion = (e) => {
    const arrowEvents = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'];
    if (arrowEvents.includes(e.key) && e.shiftKey) {
      this.bubbleUpSelectedRegion(e);
    }
  }

  bubbleUpSelectedRegion =  (e) => {
    const { setBtnsGroupPosition, showButtonsGroup } = this.props;

    const selection = window.getSelection();

    if (selection.toString()) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setBtnsGroupPosition(rect);
      showButtonsGroup();
    }
  }

  toggleEditMode = () => {
    this.setState({ editable: !this.state.editable});
  }

  render() {
    const editButtonStyles = {
      fontSize: '20px',
      border: 'none',
      background: 'transparent',
      position: 'fixed',
      left: '75%' // <= 100% - App.style.paddingRight(25%)
    }

    const contentSectionStyles = {
      textAlign: 'justify',
      background: '#fff',
      padding: '20px'
    }

    return (
      <div>
        <button style={editButtonStyles} onClick={this.toggleEditMode}>
          &#x270D;{` edit mode${this.state.editable ? ' on' : ' off'}`}
        </button>

        <section
          ref={(elm) => { this.contentContainer = elm; }}
          contentEditable={this.state.editable}
          style={contentSectionStyles}
          onMouseUp={this.bubbleUpSelectedRegion}
          onMouseMove={this.bubbleUpSelectedRegion}
          onKeyUp={this.bubbleUpEditableSelectedRegion}
        >
          <h1 style={{ textAlign: 'center'}}>
            The Psychopathology of Everyday Things
          </h1>
          <p>
            An untrained person seated in the cockpit of a modern get liner would
            be completely bewildered by the array of gauges and controls before
            him - but he would not be surprised or bothered by this because he
            recognizes that flying an airplane is a complicated task that he is
            unable to perform.   However, when he struggles to operate a door,
            switches, water faucets, and other common everyday devices,
            he becomes quite upset.
          </p>
          <p>
            There are few things quite so simple as a door. To open it, you can
            pull it or you can push it.   And yet, this is often perplexing - and
            when you figure out the basic signs that indicate whether to pull or
            push, you will find they are used inconsistently.  And sometimes, you
            will even encounter a door that slides.   So fumbling with a door
            happens quite often: we push a door that is meant to be pulled or
            vice-versa.  We solve the problem rather quickly and are not
            permanently obstructed, but it's annoying all the same.
            And it happens far more often than it should.
            The author pauses to mention he has used this analogy quite often,
            such that a poorly designed door is called a <strong>Norman Door</strong>
            - Google it.
          </p>
          <p>
            The author refers to Jacques Carelman, who has developed an entire
            series of books called "D'objets Introuvables" (roughly, "Confusing
            Objects") that provides many examples of everyday things that are
            unworkable, ill-formed, ill-conceived, and thoroughly bad in every way.
            It's an entertaining read, but a sad reminder of how many badly
            designed objects frustrate and annoy us in our everyday lives.
          </p>
          <p>
            He tells an anecdote about a friend getting trapped in a
            post office between two rows of glass doors.  The visual
            effect of the architecture was quite elegant, and "probably
            won design awards,"  but made it unclear which side of the door
            would swing open.  So after passing through the first set of doors,
            he pushed on the wrong side of a door (the side with the hinges)
            and assumed it was locked.   He turned around and did the same thing,
            and then assumed that the door had locked behind him.
            He remained stuck there until someone else wandered through the doors
            and he was able to figure out what had gone wrong.
          </p>
          <p>The two most important characteristics of good design are:</p>
          <ul>
            <li>
              <span id="Timestamp123332323">Discoverability - A user can</span>
              figure out what actions are possible and how to perform them using
              the product (How can I use it?)
            </li>
            <li>
              Understanding - A user understands the benefit of using
              the product and how to derive it (Why should I use it?)
            </li>
          </ul>
          <p>
            The glass doors in the anecdote above show a failure of
            discoverability: a glass pane with four metal squares at the
            corners does not enable the user to recognize how it can be used,
            or even to perceive by inspection how it might be used.
            Omitting a push-plate and concealing the hinges were deliberate
            design choices - and very bad ones, as they made it impossible
            to see how to operate the door, or even to recognize it was a door
            at all.
          </p>
          <p>
            The more complex a device becomes, the more difficult it is for an
            individual to determine what to do merely by looking at it.
            We provide manuals or training courses to teak people to use complex
            devices like computers or airplanes. But the author suggests
            that many devices are made to be complex by including too many
            functions, controls, and unnecessary features.
            A washing machine shouldn't look like the control room of a spaceship,
            with a bewildering array of controls and displays,
            considering that most people will never use all of the settings
            and features the modern washing machine provides.
          </p>
          <p>
            Another brief anecdote: a couple who purchased a state-of-the-art
            washer/dryer combination device were complexes by all the controls.
            The husband refused to go near it, and the wife had figured out
            one method of getting it to work and ignored everything else.
            These weren't stupid people - one was an engineer and the other a
            physician - they simply didn't want to devote the time to learning
            a complex device to perform the simple task of washing clothing.
          </p>

          <h2 id="modernComplex">The Complexity of Modern Devices</h2>
          <p>Begin with the premise: all artificial things are designed.</p>
          <p>
            That is not to say that they are designed well, or that much
            thought is put into them - but they are intentionally crafted and
            arranged by someone.   And given that, then there are an enormous
            number of things that impact the daily lives of modern man
            that have been designed - and unless you're on a camping trip in
            the wilderness, chances are the number of "designed" objects in
            your environment far outnumber the ones that are truly natural.
          </p>
          <p>
            In the best of cases, products should be designed to be
            easy to use, such that they do not become an obstruction or
            distraction, but can be used to accomplish the things
            we wish to do with a minimum of distraction.
            Sadly, this is not the case, and the stress and frustration of
            modern life largely arises from the fact that we live in a
            poorly designed world, full of awkward and difficult things -
            and this is the failure of their designers.
          </p>
          <p>
            The design of everyday objects seems very mundane and unimportant -
            but given that they rob life of its pleasure, it is a very
            worthwhile undertaking. And that is the subject of this book,
            though it is likely too large a topic for a single book to address,
            hence the author plans to focus on three areas:
          </p>
          <ul>
            <li>
              Industrial Design - A manufacturing practice that considers
              the function, value, and appearance of a product for the mutual
               benefit of both user and manufacturer
             </li>
            <li>
              Interaction Design - A technology practices that considers not
              merely the device's function, but the way in which the user
              must interact with the device
            </li>
            <li>
              Experience Design - A service industry practice that considers
              the way in which the customer will interact with a business,
              with a goal of increasing the quality and enjoyment of the total
              experience.
            </li>
          </ul>

          <h2 id="designChallenge">The Design Challenge</h2>
          <p>
            <em><strong>Design</strong></em> implies that an item is crafted in order to
            achieve a given objective. Thus far it has only been considered
            in terms of usability for a given purchase - but there is also the
            notion that a product can be designed to be attractive, or affordable,
            or efficient, or durable, or to deliver some other value.
            In some instances these qualities come into conflict with one another
            and may require a trade-off of one thing for another.
          </p>
          <p>
            The hardest part of design is often to simply get people
            to agree on these goals - or to get a single person to be reasonable
            in setting them. A customer wants the product to be both
            high-quality and cheap, to have many functions but be easy to use,
            and so on.  It is the designer who balances one desire against
            the other.
          </p>
          <p>
            And even if you can find a way to satisfy the competing
            demands of the customer, there is then the demands of the
            organization that is producing the device.  Aside of wanting it
            to be producible at a cost that enables them to make a profit,
            they may want it to be easy to service, easy to ship, etc.
          </p>
          <p>
            The happy ending to all this conflict is that it can be done -
            and every product that is commercially successful is proof that
            it has been done.  The task for designers in the competitive
            market is simply to do it better.
          </p>
        </section>
      </div>
    );
  }
}
