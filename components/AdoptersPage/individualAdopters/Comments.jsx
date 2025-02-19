import { Paragraph, SubHeading } from "@includes/Texts"
import { Container } from "@layouts/Container"

const Why = ({ data }) => {
  return (
    <Container>
      <div className="flex w-5/6 mx-auto">
        <img
          className="inline self-start"
          src={`/adoptersPage/${data.key}/why.svg`}
          alt="bullet point"
        />
        <div className="ml-4 md:ml-8">
          <SubHeading>{data.why.heading}</SubHeading>
          <br />
          <Paragraph hint>{data.why.subtext}</Paragraph>
          <br />
          <Paragraph hint>
            {data.why.list &&
              data.why.list.map(item => {
                return <li key={item}>{item}</li>
              })}
          </Paragraph>
        </div>
      </div>
    </Container>
  )
}

const How = ({ data }) => {
  return (
    <Container>
      <div className="flex w-5/6 mx-auto">
        <img
          className="inline self-start"
          src={`/adoptersPage/${data.key}/how.svg`}
          alt="bullet point"
        />
        <div className="ml-4 md:ml-8">
          <SubHeading>{data.how.heading}</SubHeading>
          <br />
          <Paragraph hint>{data.how.subtext}</Paragraph>
          <br />
          <Paragraph hint>
            {data.how.list &&
              data.how.list.map(item => {
                return <li key={item}>{item}</li>
              })}
          </Paragraph>
        </div>
      </div>
    </Container>
  )
}

const Benefits = ({ data }) => {
  return (
    <Container>
      <div className="flex w-5/6 mx-auto">
        <img
          className="inline self-start"
          src={`/adoptersPage/${data.key}/benefits.svg`}
          alt="bullet point"
        />
        <div className="ml-4 md:ml-8">
          <SubHeading>{data.benefits.heading}</SubHeading>
          <br />
          <Paragraph hint>{data.benefits.subtext}</Paragraph>
          <br />
          <Paragraph hint>
            {data.benefits.list &&
              data.benefits.list.map(item => {
                return <li key={item}>{item}</li>
              })}
          </Paragraph>
        </div>
      </div>
    </Container>
  )
}

const Other = ({ data }) => {
  return (
    <Container>
      <div className="flex w-5/6 mx-auto">
        <img
          className="inline self-start"
          src={`/adoptersPage/${data.key}/other.svg`}
          alt="bullet point"
        />
        <div className="ml-4 md:ml-8">
          <SubHeading>{data.other.heading}</SubHeading>
          <Paragraph hint>
            {data.other.videoUrl && (
              <>
                <br />
                Video:{" "}
                <a
                  className={`text-${data.key}Link`}
                  rel="noopener noreferrer"
                  href={data.other.videoUrl}
                >
                  {data.other.videoUrl}
                </a>
                {data.other.blogUrl && (
                  <>
                    <br />
                    Blog:{" "}
                    <a
                      className={`text-${data.key}Link`}
                      rel="noopener noreferrer"
                      href={data.other.blogUrl}
                    >
                      {data.other.blogUrl}
                    </a>
                  </>
                )}
              </>
            )}
          </Paragraph>
        </div>
      </div>
    </Container>
  )
}

const Comment = ({ data }) => {
  return (
    <div className="pt-20">
      {data.why && <Why data={data} />}
      <br />
      <br />
      {data.how && <How data={data} />}
      <br />
      <br />
      {data.benefits && <Benefits data={data} />}
      <br />
      <br />
      {data.other.heading && <Other data={data} />}
    </div>
  )
}

export default Comment
