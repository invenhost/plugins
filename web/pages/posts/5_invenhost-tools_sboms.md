---
title: SBOMs in InvenHost tools
date: 2025-07-25
description: InvenHost tools now provide SBOMs for InvenTree releases.
author: Matthias Mair
tag: tools, invenhost-tools
---

InvenHost tools now provide SBOMs (Software Bill of Materials) for the core InvenTree releases. This is a step towards better transparency and security in the software supply chain.

## Backstory

It has been clear for a while that SBOMs will be required by various regulations in the future. The US, EU and individual countries have released laws striking in this direction.

Especially the [EU Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act) is a big step in this direction. It requires the creation of a SBOMs from commercial vendors.

To my understanding of the law, the InvenTree project is not required to follow this law due to its non-commercial nature. However, I think it is a good idea to still provide SBOMs.  
We target enterprises and the NIS2 / supply chain laws in the EU might still require our users to procure these files.

After having realized that these things were actually becoming laws, I opened and issue in the main InvenTree repo in July 2024 [#7774](https://github.com/inventree/InvenTree/issues/7774). This led to including SBOMs for the frontend [in August 2024](https://github.com/inventree/InvenTree/pull/7784) - only for releases.  

After experimenting with the same for the backend, I realized that we would have to provide a lot of permutations. Therefore, I created a (at that time private) API that would surface these smaller SBOMs for the backend.

## Providing SBOMs via InvenHost tools

The original idea for InvenTree tools is to provide "nutrition labels" for the InvenTree releases. This did not include SBOMs at that time, but I thought it would be a good idea to include them now as the (as of now private) API makes the dynamic combination of SBOMs for the backend easy.

For now only the primary SBOM for the server will be provided, this should be sufficient for most use cases. I am not a lawyer, this is all provided as-is and without any warranty.

## Technical Details

The SBOMs are generated in the [CycloneDX](https://cyclonedx.org/) format and are available for each release of InvenTree in this year. They are generated using cyclonedx-python in a GitHub action, attestations are collected using the fantastic [sigstore](https://www.sigstore.dev/) project.

All data is then uploaded to S3 (compatible) object storage providers in the EU and US. The buckets are versioned and contents are compared regularly using a Jenkins instance that runs on fully controlled hardware.

Only one of the buckets is public, listing it disabled for now but individual files are accessible and linked in the release detail pages.

## More Links

As with any major new feature, there is an announcement post on [InvenHost talk](https://talk.invenhost.com/t/now-sboms-in-invenhost-tools/44/).

If you are an open source maintainer, I highly recommend the following resources:
- OSSF on CRA Manufacturer / Steward [Link](https://openssf.org/blog/2025/06/02/oss-and-the-cra-am-i-a-manufacturer-or-a-steward/)
- Course by the Linux Foundation [Link](https://training.linuxfoundation.org/express-learning/understanding-the-eu-cyber-resilience-act-cra-lfel1001/)
- OSSF CRA Brief [Link](https://best.openssf.org/CRA-Brief-Guide-for-OSS-Developers)
