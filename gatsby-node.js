const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    graphql(`
      {
        allContentJson(
          filter: {  key: { eq: "teamMembers" }}
        ) {
          edges {
            node {
              title
              teamMembers {
                name
                photo
                specialization
              }
            }
          }
        }
      }
      `
    ).then(result => {
      result.data.allContentJson.edges[0].node.teamMembers.forEach((teamMember, index) => {
        createPage({
          path: `/tym/${index}/`,
          component: path.resolve('./src/templates/teamMember.js'),
          context: {
            id: index,
          },
        });
        resolve();
      });
    });
  });
};
