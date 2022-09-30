import { getMailBoxes } from "@api/mailbox";
import { white } from "@styles/color";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import _ from "lodash";
import { MailBoxItem } from "@component/common";

function MailBoxList() {
  const { data: mailBoxes } = useQuery(["getMailboxes"], getMailBoxes);

  return (
    <Block>
      {mailBoxes &&
        _.map(_.chunk(mailBoxes, 2), (_mailBox, idx) => (
          <Row key={`mailbox-row-group-${idx}`}>
            {_.map(_mailBox, ({ _id, image, title, tracks }) => (
              <Col key={_id}>
                <MailBoxItem
                  mailBox={{
                    _id,
                    title,
                    image: `${process.env.REACT_APP_API_SERVER}/${image}`,
                  }}
                  tracks={tracks}
                  isCursor
                  isNavigate
                />
              </Col>
            ))}
          </Row>
        ))}
    </Block>
  );
}

const Block = styled.div`
  flex: 1;
  min-height: 500px;

  background: ${white[900]};
  border-radius: 8px;

  padding: 48px 32px 92px;

  display: flex;
  flex-direction: column;
  row-gap: 64px;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
`;

export default MailBoxList;
