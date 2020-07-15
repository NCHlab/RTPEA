# Retroelement Protein Expression Atlas


## Project Information
This web-portal hosts LINE-1 protein identfications from re-analysed PRIDE datasets. Several visualisations and exploratory options are available to allow users to browse this information. 

# Website Endpoints

| Endpoint       | Description                                                             |
|----------------|-------------------------------------------------------------------------|
| /home          | Homepage containing Interactive Human Protein Exp Data                  |
| /browse        | Interactive Table containing analysed data by RetroMiner                |
| /visualise     | ProtVista Protein Viewer                                                |
| /ideogram      | Expression data for analysed datasets                                   |
| /loci_ideogram | All Loci possible points of interest                                    |
| /sequence      | Displays sequence data for selected protein                             |
| /download      | Download data from the database                                         |
| /api           | Use the built in API resolver to retrieve data                          |
| /info          | Information on what powers the server                                   |
| /contact       | Members involved in creating the website / getting the data / knowledge |

# Breakdown of sections

## Homepage
The homepage contains a SVG interactive human image that allows a user to explore the summary metrics of the Retroelement Protein Expression Atlas for the selected tissue / organ.

Hovering over the tissues allows for the graph to change to represent the summary metrics, clicking on an organ allows the graph to pause the data on the selected tissue.

The page also contains an explanation of RTPEA & RetroMiner, the tool which was used to generate the data.

On initial load, the API server and MongoDB server are checked to see if they are online.


## Browse

This page contains a super table which displays all the data that has currently been analysed by RetroMiner. 

The Table displays data by PXD (by default) which is a dataset identifier set by PRIDE (ProteomeExchange consortium)

Within each section (PXD) The `Sample Number`, `Tissue`, as well as the ORF1/2p Identifications.

Clicking on the `Sample Number` or anywhere on the table is another table which displays the variants as well as the confidence level and a link to the sequence. This sub-table for the samples displays the variants that may occur.

Filtering & Sorting is available on the table to sort by the `PXD`, `Study`, `No. of Samples` & `Disease`. The table can be sorted by any column header simply by clicking on it.

Sorting is also available on the sub-table which allows a user to find expression proteins.

The confidence levels are given as a percentage as well as colour coded.

- Green =  High Confidence
- Orange = Med Confidence
- Red = Low COnfidence

The NUMBER represents the confidence score calculated by PeptideShaker. This number ranges between 0 to 100 (highest) and indicates how confident we are that this protein is expressed in the given sample. The rate of false positive results is less than 1 in 1000 (FDR < 0.01).

We have given different variants of the same family a different name by simply adding an underscore followed by a number. (e.g: ORF1p_HS_10). The last number has no biological meaning.

There could be protein results by three LINE-1 protein families: HS, PA2 and PA3.
And 3 different proteins by HERVs (the gag, pol and env groups)

## Visualise

This section contains 3 sub-sections to visualise the data

### Protein Centric

To visualise the data, ProtVista was used and heavily altered to produce results in a way that would convey the data appropriately.

By Selecting a `Tissue type`, `State` and `Minimum Score`, Variant expression data is generated along with the `position`, `Description`, `Family`, `Tissue Type`, `Disease State` and `Confidence`. If a dataset is `Diseased`, then an additional section displays the type of disease: `Disease State` e.g. METASTIC MELANOMA for Diseased Blood Serum.

An option exists to map the variant onto a chromosome which is related to the next section.

### Chromosome Centric

The Chromosome Centric Mapper allows a user to view the highest expression variants on the human chromosome.

Clicking on the chromosome allows for a larger zoomed in version. The higher the bar, the higher expressing it is.

A user can sort by familes `HS`, or `PA2`, or can search specifically for a variant e.g `HS_94`.

To find the SEQUENCE, hover over the annotation and click the link.


### All Loci

The All Loci Mapper allows a user to view all POSSIBLE expressing variants on the human chromosome.
Clicking on the chromosome allows for a larger zoomed in version.
This section operates the same was as in the Chromosome Centric Mapper.

### Download / API

This section contains the option for downloading various bits of data that is stored in the database.

An API section also exists to allow a user to execute PXD numbers without the need for a commandline or programming tool.

# Author Information

Created by Nayam Chowdhury (as part of an MSc project)

Guidance / Help:
- Nazrath Nawaz (PhD)
- Conrad Bessant (Professor)


Website Link: [https://rtpea.com/](https://rtpea.com/home)

This project was made possible and bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


| Development Ongoing | Development Version | Production Version |
|:--- | :---: | :---:|
|:white_check_mark: | v1.4 | v1.4|
