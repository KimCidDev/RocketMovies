import { Container } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

import { TiArrowLeftThick } from "react-icons/ti";
import { IoMdTime } from "react-icons/io";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Tag } from "../../components/Tag"

export function ShowMemory () {
  return (
    <Container>
      <Header />
      <main>
        <section>
        <ButtonText icon={TiArrowLeftThick}title="Back to Login" />
        <div className="nameRating">
        <h1>Taxi Driver</h1>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
        <div className='databaseInfo'>
            <span id='userId'> 
            <img src="https://github.com/kimciddev.png" alt="profile user picture" />
            Por Kim Teixeira 
           </span>
          <span id='timeStamp'>
            <IoMdTime />
            09/06/23 às 5:57
          </span>
        </div>
        </section>
        
        <div className="tags">
        <Tag title='Thriller'/>
        <Tag title='Crime'/>
        <Tag title='Drama'/>
        </div>
        
        <p>Travis Bickle (Robert De Niro) goes to a New York City taxi depot where he applies for a job as a driver to the tough-talking personnel officer (Joe Spinell). Travis claims that he is an honorably discharged Marine (it is implied that he is a Vietnam Veteran). After making an impression on the personnel officer, Travis gets the job for the night shift due to his chronic insomnia.At one porn theater he tries to make an advance on the concession lady to no avail. He works 12 or 14 hour shifts during the evening and night time hours carrying passengers among all five boroughs of New York City. Sometimes during his breaks, he goes to a local all-night diner to have something to eat or just a few cups of coffee where fellow taxi drivers also hang out during their late-night lunch breaks. One of whom is a self-appointed philosophical type named Wizard (Peter Boyle). Wizard talks about the degradation of the night time in the city. Travis barely interacts with the other taxi drivers, mainly speaking awkwardly and shyly when he's spoken to.Travis spies Betsy joking with a co-worker named Tom (Albert Brooks). Travis works up the nerve to ask her out and Betsy is initially intrigued by Travis. She agrees to a date with him after he flirts with her over coffee and sympathizes with her own apparent loneliness. She compares him to a character in the Kris Kristofferson song "The Pilgrim, Chapter 33."
<br />
<br />
Travis is further revolted by what he considers the moral decay around him. One night while on shift, Iris (Jodie Foster), a 12-year-old child prostitute, gets in his cab, attempting to escape her pimp. Shocked by the occurrence Travis fails to drive off quickly enough and her pimp, "Sport" (Harvey Keitel), reaches the cab. Sport forcibly grabs Iris away with him and gives Travis a crumpled twenty dollar bill as a bribe not to say anything, which haunts Travis with the memory of his failure to help the girl.</p>
        
        
        
      </main>
    </Container>
  )
}