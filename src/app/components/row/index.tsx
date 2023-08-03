import styled from "styled-components";
import tw from "twin.macro";
import { Box, BoxComponent } from "./boxcomponent";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    p-3
    lg:p-6
  `};
`;

const Title = styled.h2`
  ${tw`
    text-4xl
    lg:text-6xl
  `};
`;

const Row = styled.div`
  ${tw`
    max-w-screen-xl
    grid grid-cols-1 lg:grid-cols-2
    gap-8
  `};
`;

interface RowProps {
    title: string;
    rowData: Box[];
}

export function RowComponent({ title, rowData }: RowProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Row>
        {rowData.map((box) => (
          <BoxComponent
            icon={box.icon}
            title={box.title}
            description={box.description}
          />
        ))}
      </Row>
    </Container>
  );
}