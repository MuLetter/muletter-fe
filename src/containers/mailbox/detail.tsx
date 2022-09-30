import { getMailBoxDetail } from "@api/mailbox";
import { MailBoxDetailComponent } from "@component";
import { Col, Row, Wrap } from "@component/mailbox/detail/styles";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import _ from "lodash";
import { MailItem } from "@component/common";

export function MailBoxDetailContainer() {
  const { id } = useParams();
  const { data: mails } = useQuery(["getMailBox", id], () =>
    getMailBoxDetail(id!)
  );

  return mails ? (
    <MailBoxDetailComponent>
      <Wrap className="mailbox-detail-wrap">
        <Row>
          {_.map(mails, (mail) => (
            <Col key={mail._id}>
              <MailItem mail={mail} />
            </Col>
          ))}
        </Row>
      </Wrap>
    </MailBoxDetailComponent>
  ) : (
    <></>
  );
}
