import * as React from "react";
import { graphql } from "gatsby";
import PageTemplate from "./PageTemplate";

// markup
const InnerPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return <PageTemplate fields={frontmatter} />;
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        meta {
          title
          description
          noIndex
        }
        title
        layoutSettings {
          footerPadding
          blackMenu
        }
        sections {
          type
          image {
            ...GatsbyImage
          }
          markdown
          overlay
          type
          content
          button {
            slug
            title
          }
          cards {
            description
            thumbnail {
              ...GatsbyImage
            }
            url
          }
        }
      }
    }
  }
`;

export default InnerPage;
