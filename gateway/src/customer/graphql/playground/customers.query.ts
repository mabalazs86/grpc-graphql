export const customersQuery = `{
    customers(
        input: {
          isRegistered: false
        }
        pagination: { first: 5 }
      ) {
        page {
          pageInfo {
            startCursor
            endCursor
            hasPreviousPage
            hasNextPage
          }
          edges {
            cursor
            node {
              id
              name
              isRegistered
            }
          }
        }
      }
}`;
