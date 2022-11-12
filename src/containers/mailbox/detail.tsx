import { getMailBoxDetail } from "@api";
import { DetailBottomContent, MailBoxDetailComponent } from "@component";
import { Col, Row, Wrap } from "@component/mailbox/detail/styles";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import _ from "lodash";
import { MailItem } from "@component/common";
import { OpacityAnimationCont } from "@styles/block";
import { useRecoilValue } from "recoil";
import { authState } from "@store/atom";

export function MailBoxDetailContainer() {
  const auth = useRecoilValue(authState);
  const { id } = useParams();
  const { data } = useQuery(["getMailBox", id], () => getMailBoxDetail(id!));
  const navigate = useNavigate();

  return (
    <OpacityAnimationCont isMin>
      <MailBoxDetailComponent
        bottomContent={
          data && (
            <DetailBottomContent
              mailbox={data.mailbox}
              tracks={data?.mailbox.tracks}
              isMe={auth?.id !== data?.mailbox.authId}
            />
          )
        }
      >
        <Wrap className="mailbox-detail-wrap">
          {data &&
            _.map(_.chunk(data.mails, 2), (_mails, idx) => (
              <Row key={`mailbox-detai-row-${idx}`}>
                {_.map(_mails, (mail) => (
                  <Col key={mail._id}>
                    <MailItem
                      clickAction={() =>
                        navigate(`/mail/${mail._id}`, {
                          state: {
                            mailBoxId: id,
                          },
                        })
                      }
                      mail={mail}
                    />
                  </Col>
                ))}
              </Row>
            ))}
        </Wrap>
      </MailBoxDetailComponent>
    </OpacityAnimationCont>
  );
}
