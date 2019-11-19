import React from 'react';

import { AspectRatio, CloudOutlined, DesktopWindowsRounded, ViewQuiltOutlined, DnsOutlined, Cached } from '@material-ui/icons/';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class SoftSkillCards extends React.Component<{ style: any }>
{
  render()
  {
    var values: any = [["WEB DEVELOPMENT", "5+ years of experience in frontend and backend. Developed a portal site, a chat service, etc.", DesktopWindowsRounded],
    ["FULL-STACK", "Java, LAMP, JavaScript, HTML, CSS, etc. Used SQL and NoSQL databases.", AspectRatio],
    ["DEVOPS", "Deployed web apps to EC2 with Jenkins, Maintained the apps,web server app(Nginx), relevant PIconS, environment of development.", Cached],
    ["RESPONSIVE", "Adjusted Web design for computer, tablets. mobiles with Flexbox,etc.", ViewQuiltOutlined],
    ["AWS", "Architected a serverless chat app with API Gateway, Lambda and DynamoDB. Maintained EC2 apps. Improved message app with Lambda, SQS and SNS.", CloudOutlined],
    ["SERVERLESS", "Architected and developed a serverless customer chat app with AWS services. Improved a serverless cutomer message app with AWS services. ", DnsOutlined]];

    var cards = [];
    for (var value of values)
    {
      const SoftSkillIcon: any = value[2];
      cards.push(
        <Card className={this.props.style.card}>
          <CardMedia>
            <SoftSkillIcon className={this.props.style.iconExperience} />
          </CardMedia>
          <CardContent>
            <Typography variant="h4" component="h2">{value[0]}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{value[1]}</Typography>
          </CardContent>
        </Card>
      );
    }
    return (cards);
  }
}

export default class SoftSkill extends React.Component<{ style: any }>
{
  renderSoftSkillCards(style: any)
  {
    return <SoftSkillCards style={style} />;
  }

  render()
  {
    return (
      <Grid container className={this.props.style.root} spacing={4}>
        <Grid item container justify="center">
          {this.renderSoftSkillCards(this.props.style)}
        </Grid>
      </Grid >
    );
  }
}