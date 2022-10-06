import { Container, Header, CollectionPreferences, Pagination, Table } from "@cloudscape-design/components";
import { useState } from "react";


export default  function TableDemo2() {
  let items = []

  for (let i = 0; i < 100; i++) {
    items.push({ id: `id-${i}`, content: `hello ${i}` })
  }

  let tableData = {
    items: items,
    start: 1,
    itemsPerPage: 10,
    visibleFields: ["id", "content"]
  }
  const [test, setTest] = useState(tableData)


  function handleChange(event){    
    setTest((prev) => {
      let key = Object.keys(event)[0]
      console.log("Logging test and  and event on tables page", event, prev)
      return {...prev, [key]:event[key]}
    })
  }

  return (
    <Container>
    <Table
      header={<Header variant="h2">Demo Table</Header>}
      variant="container"
      ariaLabels={{
        selectionGroupLabel: "Items selection",
        allItemsSelectionLabel: ({ selectedItems }) =>
          `${selectedItems.length} ${selectedItems.length === 1 ? "item" : "items"
          } selected`,
        itemSelectionLabel: ({ selectedItems }, item) => {
          let isItemSelected = selectedItems.filter((i) => i.id === item.id)
            .length;
          return `${item.name} is ${isItemSelected ? "" : "not"} selected`;
        }
      }}
      preferences={
        <CollectionPreferences
          title="Preferences"
          visibleContentPreference={{
            title: "Fields",
            options: [
              {
                options: [
                  { id: "id", label: "Id", editable: false },
                  {
                    id: "content",
                    label: "Content"
                  }
                ]
              }
            ]
          }}
          pageSizePreference={{
            title: "Items per page",
            options: [
              {
                value: 10,
                label: "10"
              },
              {
                value: 20,
                label: "20"
              },
              {
                value: 50,
                label: "50"
              }
            ]
          }}
          preferences={{
            pageSize: test.itemsPerPage,
            visibleContent: test.visibleFields
          }}
          onConfirm={(e) => {
            handleChange({
              itemsPerPage: e.detail.pageSize,
              visibleFields: e.detail.visibleContent
            });
          }}
          confirmLabel="Confirm"
          cancelLabel="Cancel"
        />
      }
      pagination={
        <Pagination
          ariaLabels={{
            nextPageLabel: "Next page",
            previousPageLabel: "Previous page",
            pageLabel: (pageNumber) => `Page ${pageNumber}`
          }}
          currentPageIndex={test.start}
          pagesCount={test.items.length / test.itemsPerPage}
          onChange={(e) => {
            handleChange({ start: e.detail.currentPageIndex });
          }}
          onNextPageClick={(e) => {
            handleChange({ start: e.detail.requestedPageIndex });
          }}
          onPreviousPageClick={(e) => {
            handleChange({ start: e.detail.requestedPageIndex });
          }}
        />
      }
      columnDefinitions={[
        {
          header: "Id",
          id: "id",
          cell: (item) => {
            return <p>{item.id}</p>;
          }
        },
        {
          header: "Content",
          id: "content",
          cell: (item) => {
            return <p>{item.content}</p>;
          }
        }
      ]}
      visibleColumns={test.visibleFields}
      items={test.items.slice(
        (test.start - 1) * test.itemsPerPage,
        test.start * test.itemsPerPage
      )}
    ></Table>
  </Container>
)
} 