import { getMailBoxDetail } from "@api";
import { MailBoxDetailComponent } from "@component";
import { Col, Row, Wrap } from "@component/mailbox/detail/styles";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import _ from "lodash";
import { MailItem } from "@component/common";

export function MailBoxDetailContainer() {
  const { id } = useParams();
  const { data: mails } = useQuery(["getMailBox", id], () =>
    getMailBoxDetail(id!)
  );
  const navigate = useNavigate();

  return mails ? (
    <MailBoxDetailComponent>
      <Wrap className="mailbox-detail-wrap">
        <Row>
          {_.map(mails, (mail) => (
            <Col key={mail._id}>
              <MailItem
                clickAction={() => navigate(`/mail/${mail._id}`)}
                mail={mail}
              />
            </Col>
          ))}
        </Row>
      </Wrap>
    </MailBoxDetailComponent>
  ) : (
    <></>
  );
}
