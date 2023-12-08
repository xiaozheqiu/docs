import React from 'react';
import {
  Accordion,
  AccordionContent as AccordionContentAksara,
  AccordionHeader as AccordionHeaderAksara,
  AccordionItem as AccordionItemAksara,
  ActionListItem as ActionListItemAksara,
  Box,
  theme,
} from '@aksara-ui/react';

import { TocHeader, TocText } from './styled';
import { Edge, MenuNode } from 'interfaces/nodes';
import styled, { css } from 'styled-components';

interface TocJsonWrapperProps {
  tree: Edge<MenuNode> | MenuNode;
  onClick: (e: any, url: string) => void;
  isItemSelected: (url: string) => boolean;
  isAccordionHeaderActive: (url: string) => boolean;
}

function NestedTocJsonWrapper({
  item,
  onClick,
  isItemSelected,
  isAccordionHeaderActive,
}: {
  item: MenuNode;
  onClick: (e: any, url: string) => void;
  isItemSelected: (url: string) => boolean;
  isAccordionHeaderActive: (url: string) => boolean;
}) {
  return (
    <Accordion type="multiple">
      <AccordionItem key={item.title} value={item.title}>
        <AccordionHeader size="md" isActive={isAccordionHeaderActive && isAccordionHeaderActive(item.url)}>
          <TocText>{item.title}</TocText>
        </AccordionHeader>
        {item.items.map((itemChildren) => {
          return (
            <AccordionContent key={itemChildren.title}>
              {itemChildren.items?.length ? (
                <>
                  <NestedTocJsonWrapper
                    item={itemChildren}
                    onClick={onClick}
                    isItemSelected={isItemSelected}
                    isAccordionHeaderActive={isAccordionHeaderActive}
                  />
                </>
              ) : (
                <ActionListItem
                  onClick={(e) => {
                    if (onClick) {
                      onClick(e, itemChildren.url);
                    }
                  }}
                  isActive={isItemSelected && isItemSelected(itemChildren.url)}
                  indicator={false}
                >
                  {itemChildren.title}
                </ActionListItem>
              )}
            </AccordionContent>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
}

function TocJsonWrapper({ tree, onClick, isItemSelected, isAccordionHeaderActive }: TocJsonWrapperProps) {
  return tree?.items.length ? (
    <Accordion type="multiple">
      {tree.items.map((item) => {
        // if using accordion
        if (item.useAccordion) {
          return item.items.length ? (
            <AccordionItem key={item.title} value={item.title}>
              <AccordionHeader
                onClick={(e) => {
                  if (onClick && item.url) {
                    onClick(e, item.url);
                  }
                }}
                size="md"
                isActive={isAccordionHeaderActive && isAccordionHeaderActive(item.url)}
              >
                <TocText>{item.title}</TocText>
              </AccordionHeader>
              {item.items.map((itemChildren) => {
                return (
                  <AccordionContent key={itemChildren.title}>
                    {itemChildren.items?.length ? (
                      <>
                        <NestedTocJsonWrapper
                          item={itemChildren}
                          onClick={onClick}
                          isItemSelected={isItemSelected}
                          isAccordionHeaderActive={isAccordionHeaderActive}
                        />
                      </>
                    ) : (
                      <ActionListItem
                        onClick={(e) => {
                          if (onClick) {
                            onClick(e, itemChildren.url);
                          }
                        }}
                        isActive={isItemSelected && isItemSelected(itemChildren.url)}
                        indicator={false}
                      >
                        {itemChildren.title}
                      </ActionListItem>
                    )}
                  </AccordionContent>
                );
              })}
            </AccordionItem>
          ) : null;
        }

        // This is section title without url
        else if (!item.url) {
          return (
            <Box key={item.title}>
              <AccordionItem value={item.title}>
                <TocHeader>{item.title}</TocHeader>
                {item.items?.length ? (
                  <Box my={12}>
                    <TocJsonWrapper
                      tree={item}
                      onClick={onClick}
                      isItemSelected={isItemSelected}
                      isAccordionHeaderActive={isAccordionHeaderActive}
                    />
                  </Box>
                ) : null}
              </AccordionItem>
            </Box>
          );
        }

        // Item with url
        return (
          <Box mt={12} key={item.title}>
            <AccordionItem value={item.title} key={item.title}>
              <ActionListItem
                onClick={(e) => {
                  if (onClick) {
                    onClick(e, item.url);
                  }
                }}
                isActive={isItemSelected && isItemSelected(item.url)}
                indicator={false}
              >
                {item.title}
              </ActionListItem>
              {item.items?.length ? (
                <TocJsonWrapper
                  tree={item}
                  onClick={onClick}
                  isItemSelected={isItemSelected}
                  isAccordionHeaderActive={isAccordionHeaderActive}
                />
              ) : null}
            </AccordionItem>
          </Box>
        );
      })}
    </Accordion>
  ) : null;
}

export default TocJsonWrapper;

const AccordionItem = styled(AccordionItemAksara)`
  margin-left: -8px;
  margin-top: 8px;
  div {
    display: flex;
  }
`;

const activeAccordionHeaderStyle = css`
  span,
  svg {
    color: ${theme.colors.blue07};
  }
  svg > path {
    fill: currentColor;
  }
`;

const AccordionHeader = styled(AccordionHeaderAksara)<{ isActive: boolean }>`
  font-size: 14px;
  margin-bottom: 8px;
  ${(props) => (props.isActive ? activeAccordionHeaderStyle : '')}
`;

const AccordionContent = styled(AccordionContentAksara)`
  display: 'flex';
  margin-left: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-left: 1px solid ${theme.colors.greylight03};
`;

const ActionListItem = styled(ActionListItemAksara)`
  width: 100%;
  display: 'block';
  padding: 4px 0 4px 8px;
  margin: 2px 0;
  border-radius: 12px;
  color: ${(props) => (props.isActive ? theme.colors.blue07 : theme.colors.greymed05)};
  background-color: ${(props) => (props.isActive ? theme.colors.blue01 : theme.colors.white)};
`;
