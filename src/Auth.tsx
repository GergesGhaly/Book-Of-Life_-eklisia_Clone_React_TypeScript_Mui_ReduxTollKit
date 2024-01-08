import { Box } from "@mui/material";
import React from "react";
import DrawerHeader from "./DrawerHeader";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { start } from "repl";

const Auth: React.FC = () => {
  const { FontSlice } = useSelector((state: RootState) => state);
  console.log(FontSlice);
  return (
    <Box sx={{ fontSize: FontSlice, lineHeight: 2, textAlign: "start" }}>
      <DrawerHeader />
      What is meant by hope: Our hope is in God who takes care of us, helps us,
      and protects us, and in this way we live in peace. Not only in peace, but
      in joy because the book says: “Rejoicing in hope” (Epistle of Paul the
      Apostle to the Romans 12:12). Hope is one of the three greatest virtues
      that the Prophet said about: faith, hope, and love. God loves us more than
      we love ourselves and knows our goodness more than we know us: With this
      hope, a person lives constantly expecting good. Hope that God is doing
      good. People say that a person who has hope is optimistic because he
      expects good. He expects goodness through God’s intervention in his life,
      because God loves us more than we love ourselves. Sometimes our love for
      ourselves is a harmful love linked to lust that destroys us. God is the
      one who knows what is good for us more than we do. Because it is possible
      that the goodness that you know is in a specific area. But God wants more
      good for you. I know someone who said to me: I had applied for a job and
      prayed a thousand “Our Father who…”, but I was not accepted for this job.
      And then God provided me with another, better job. I later discovered that
      if I had taken the first job, I would have been tired. God knows what is
      good for us better than we know what is good for ourselves. We live in
      hope because our lives are in the hands of God alone: In order to live in
      hope, we must know that our lives are in the hands of God alone, not in
      the hands of people, not in the hands of events, and not in the hands of
      Satan. And so is the life of the whole world. Therefore, the person who
      has hope in God has hope that God will manage his life in the best way,
      and that his life is in the hands of God, which is filled with tenderness,
      compassion, tenderness, and compassion. With hope we believe that the
      tribulation must end: When we face tribulation, we must hold on to the
      hope that this tribulation will end. It will end because we have hope in
      God who said: “Come to me, all you who labor and are heavy laden, and I
      will give you rest” (Matthew 11:28). This is a hope that God always has
      His eye on us and says to everyone who has a heavy burden, “Come, let me
      relieve you of your burden.” A hope in God who solves problems and turns
      evil into good. Our belief that God is always working for our good gives
      us hope: Sometimes people in hope say: “Our Lord will do good,” but there
      is a deeper statement that is, “God is doing good now and not in the
      future, but God is always working for our good.” While you are troubled
      and worried, God is working for your good, but you do not see it, but you
      will know it later. That is, we do not see God's work at the time, but we
      believe that He is working. The problem lies in our eyes that do not see,
      and it is not God who does not work. Then some say: “We have hope that God
      will respond to our requests,” but the truth is that God gives us without
      asking, but above what we ask. Please live in peace: Hope, trust, and
      faith in God make a person live in peace, and say to himself: “What will
      happen?! Nothing.” You may say to me that there are many enemies
      surrounding me, but David says: “When I walk through the valley of the
      shadow of death, I will fear no evil, for you are with me. Your staff and
      your staff comfort me” (Psalms 23:4), and we talked about this topic here
      on the St. Taklahimanot in other sections. In hope, we trust in God's
      incomprehensible wisdom, and we believe in His wise management. We trust
      in God based on the reality of His ancient history with us. Remembering
      God’s good deeds gives us hope: I wish each of us would sit with ourselves
      and remember the many needs that God helped us with. In which God helped
      those around him. Record it. As the Psalmist says, “Bless the Lord, my
      soul, and do not forget all his good deeds” (Psalm 103:2). If you remember
      God’s good deeds to you in the past, you will have hope that you will
      receive the same good deeds in the future, as well as God’s good deeds to
      those around you and to the country. Reading the lives of the saints gives
      us hope: Hope also comes to us in God’s help if we read the lives of the
      saints and what God did with them, and how He took hold of their lives and
      led them with all tenderness and compassion. As stated in the first
      chapter of the book of the Prophet Jeremiah: “And they will fight against
      you, but will not prevail against you; for I am with you, says the Lord,
      to deliver you” (Jeremiah 1:19). Faith in God’s power gives us hope: We
      have hope in the Lord if we are completely certain that He is capable of
      all things, and that what is impossible with men is possible with God. We
      trust that God opens and no one closes, and for every closed door God has
      a hundred keys, not just one key. Rather, God has the “master key,”
      meaning he is able to open any door. Whenever you find a closed door, you
      ask for the hand of God, for He is the generous opener, and you believe
      that God is the one who will open it.
      <br />
      Pope Shenouda III
    </Box>
  );
};

export default Auth;
