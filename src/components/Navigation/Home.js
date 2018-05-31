import React, { Component } from "react";
import Human from "../Human/Human";
import CountTo from "react-count-to";

// Displays the Home page using JSX
const Home = ({ onShow, onHide }) => {
  return (
    <div className="">
      <p className="App-intro">
        <h1 className="container colour-white">
          Retroelement Protein Expression Atlas
        </h1>
      </p>
      <body2>
        <div className="container">
          {/* Displays the human image + data retrieved from the human component */}
          <Human />
        </div>
      </body2>
      <div className="line-seperator" />
      <div className="background-body">
        <button type="button" onClick={onShow}>
          show
        </button>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                # of Orf1:
                <CountTo to={1608424} speed={3000} />
              </h1>
            </div>
            <div className="col-md-6">
              <h1>
                # of Orf2:
                <CountTo to={2934451} speed={3000} />
                {/* onComplete={onHide} */}
              </h1>
            </div>
          </div>
          <br />
        </div>
        <div className="line-seperator" />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-justify">
              Retrotransposons (also called transposons via RNA intermediates)
              are genetic elements that can amplify themselves in a genome and
              are ubiquitous components of the DNA of many eukaryotic organisms.
              These DNA sequences use a "copy-and-paste" mechanism, whereby they
              are first transcribed into RNA, then converted back into identical
              DNA sequences using reverse transcription, and these sequences are
              then inserted into the genome at target sites. Retrotransposons
              form one of the two subclasses of transposons, where the others
              are DNA transposons, which does not involve an RNA intermediate.
            </div>
            <div className="col-md-6">EXTRA TEXT OR IMAGES GO HERE</div>
          </div>
        </div>
      </div>
      <div className="line-seperator" />
      <div className="background-body2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">EXTRA TEXT OR IMAGES GO HERE</div>
            <div className="col-md-6 text-justify">
              The retrotransposons' replicative mode of transposition by means
              of an RNA intermediate rapidly increases the copy numbers of
              elements and thereby can increase genome size. Like DNA
              transposable elements (class II transposons), retrotransposons can
              induce mutations by inserting near or within genes. Furthermore,
              retrotransposon-induced mutations are relatively stable, because
              the sequence at the insertion site is retained as they transpose
              via the replication mechanism. Retrotransposons copy themselves to
              RNA and then back to DNA that may integrate back to the genome.
              The second step of forming DNA may be carried out by a reverse
              transcriptase, which the retrotransposon encodes.[4] Transposition
              and survival of retrotransposons within the host genome are
              possibly regulated both by retrotransposon- and host-encoded
              factors, to avoid deleterious effects on host and retrotransposon
              as well. The understanding of how retrotransposons and their
              hosts' genomes have co-evolved mechanisms to regulate
              transposition, insertion specificities, and mutational outcomes in
              order to optimize each other's survival is still in its infancy.
              Because of accumulated mutations, most retrotransposons are no
              longer able to retrotranspose.
            </div>
          </div>
        </div>
      </div>
      <div className="line-seperator" />

      <div className="background-body3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-justify">
              Retrotransposons, also known as class I transposable elements,
              consist of two subclasses, the long terminal repeat
              (LTR-retrotransposons) and the non-LTR retrotransposons.
              Classification into these subclasses is based on the phylogeny of
              the reverse transcriptase,[5] which goes in line with structural
              differences, such as presence/absence of long terminal repeats as
              well as number and types of open reading frames, encoding domains
              and target site duplication lengths
            </div>
            <div className="col-md-6">EXTRA TEXT OR IMAGES GO HERE</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
