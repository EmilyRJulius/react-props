function App() {
    return (
      <div>
        <Tweet
          name="Emily Julius"
          username="EmJMoth"
          date={new Date().toDateString()}
          message="This app will disrupt everything!!"
        />
        <Tweet
          name="Mike Zoeller"
          username="mazoeller"
          date={new Date().toDateString()}
          message="#Ilovehashtags"
        />
        <Tweet
          name="Tim Garcia"
          username="TimGarcia0"
          date={new Date().toDateString()}
          message="Follow me on Twitter!"
        />
      </div>
    );
  }