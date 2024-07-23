import picture from '/src/assets/picture.jpg'
import dos from '/src/assets/dos.jpg'
import flet_projects from '/src/assets/flet_project.jpg'
import ivi from '/src/assets/ivi.png'
import weatherAPP from '/src/assets/weatherAPP.png'

export const PROJECTS = [
    {
        "name":"DoSDefenderAI",
        "text":"This project is my master's thesis , where the goal of the work was to design and implement an application using artificial intelligence to protect networks from DoS attacks. The work focused on a comprehensive approach to the problem of DoS-type cyber attacks, a review of the methods used to prevent such threats using artificial intelligence, and the design and implementation of a \
                of a dedicated application. The application includes a trained model on a sample dataset containing the most common forms of DoS attack. The application has software that serves as a packet analyzer to collect information about network traffic, which is subjected to classification by artificial intelligence. To visualize the operation of the program, an intuitive graphical interface is \
                responsible, containing the most relevant elements such as, visualization and statistics on network traffic. In order to complete the project, technologies were used to meet all design objectives. For this purpose, TensorFlow technology and Scikit-learn library were used. Using PyShark technology, an embedded packet analyzer was implemented in the application, which will continuously \
                capture packets and pass them to the module dealing with classification and to the user interface module, which was implemented using the Flet framework and visualizes the most necessary data on network traffic and the operation of the classifier.",
        "tags":"Flet - PyShark - TensorFlow - SkLearn",
        "img": {dos},
        "git":"https://github.com/GrzSwa/DoSDefenderAI"
    },
    {
        "name":"Flet_projects",
        "text":"This is the project that started my adventure with the flet framework. The project consisted of creating an application widget to play songs from a playlist from the youtube platform. The framework used was flet, which is an open source framework that allows you to create cross-platform applications based on the Dart language and the Flutter framework. The project includes a fully functional application in which the user pastes a link to a playlist from the youtube platform and after waiting a few moments, the first item from the playlist is played. The user can skip to the next song, or back the song using standard media action buttons. The project assumes three possible looks for the widget. A standard appearance otherwise called horizon appearance, where the longer side of the widget is on the x-axis. Another appearance is the so-called vertical appearance, where the longer side of the widget is on the y-axis.\
        The third look is very minimalistic, with no song thumbnail or song progress bar, only action buttons, paste link and a settings button. Of the settings the application offers are: change the appearance of the widget, set transparency, color and set the option to always display the widget above other applications. This project was created on my own initiative in order to improve the comfort of working on, for example, a laptop for people what like to listen to music while working. It aims to efficiently change music in the appropriate widget without having to switch between applications or search for the right tab in the browser, which will ensure that the user does not fall out of the rhythm of work. It is a functional project, but in constant development. Future plans are to add another streaming platform, e.g. Spotify, SoundCloud.",
        "tags":"Flet - Python",
        "img": {flet_projects},
        "git":"https://github.com/GrzSwa/Flet_projects"
    },
    {
        "name":"Aplikacja pogodowa",
        "text":"Diam duo takimata rebum stet consetetur exerci aliquyam consequat sadipscing consetetur in eirmod. Minim stet sea laoreet tempor accusam esse ea eos sed nostrud kasd gubergren dolores et tation feugiat. Sed sit diam eos at nostrud vero ipsum sanctus consequat suscipit dolore amet diam nonumy erat gubergren. Consetetur kasd est sadipscing ea voluptua delenit. Amet no dolores iriure diam et. Takimata accusam hendrerit eos diam nonumy. Luptatum praesent et ipsum sed diam no adipiscing lobortis velit diam dignissim praesent stet et. Kasd rebum sea amet et sit ipsum eirmod diam dolor blandit amet et illum stet ut hendrerit no. Stet sed consequat labore accumsan hendrerit dolor dolor sed invidunt. Diam consequat accumsan labore lorem diam et consetetur autem dolores et luptatum stet eos sed ad no diam. Qui diam eos nulla. Est kasd feugiat justo euismod. Vel exerci dolor diam vel magna. Diam dolore ipsum invidunt ea eirmod labore et dolore sit dolore labore at elitr te ipsum consequat labore. Sanctus sed ut assum sit stet consequat dolore ipsum laoreet aliquip ut eros. Elitr est amet facer et consequat nostrud magna accumsan erat sea ipsum. Option sed et. \
        Consetetur dolore voluptua sadipscing accusam duis ipsum diam clita hendrerit aliquyam rebum. Blandit dignissim sea nobis. Wisi nulla est aliquip diam sea est diam dolore dolor erat eirmod kasd magna lorem diam sed. Consequat et labore ex labore et vel dolores amet nonumy voluptua. Rebum voluptua ipsum in laoreet eros gubergren vero elitr duo eirmod aliquip et. Ipsum at dolor illum gubergren praesent dolore elitr consetetur invidunt ipsum ea elitr sit et eos. Gubergren et sanctus eos ipsum nonumy et facer at magna dolores. Magna sed ut duo accusam voluptua voluptua accusam ut ut assum stet eirmod et nulla et. Dolor sea est ea ullamcorper sed justo sed. Amet consequat diam sed ex odio dolor accusam aliquyam ut ut minim eirmod. Consetetur ipsum kasd ullamcorper. Et consequat tempor facilisis ea aliquyam diam et stet invidunt vulputate. Et at et gubergren. Consetetur diam qui dolores lorem dolores tempor takimata lorem amet aliquyam erat gubergren kasd duis ipsum sanctus vel.",
        "tags":"Flutter - FastAPI",
        "img": {weatherAPP},
        "git":"https://github.com/GrzSwa/AplikacjaPogodowa"
    },
    {
        "name":"Ivi",
        "text":"This project is my engineering thesis, where the goal of the thesis was to design and implement a mobile application to\
        support learning spelling. The application was created for users who want to improve their spelling skills. The app is primarily dedicated to students who need to master spelling and punctuation material in the early stages of their education. The project was implemented using React Native and Firebase technologies. In the first stage of the application's development, a complete and functional user interface was prepared, as well as a database of spelling learning materials stored in a real-time database provided by the Firebase platform. A Google account authentication tool was also implemented.",
        "tags":"React Native - Firebase",
        "img": {ivi},
        "git":"https://github.com/GrzSwa/Ivi"
    },
]