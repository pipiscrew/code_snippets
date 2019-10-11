            ITransition transition = transitionElement.GetTransition(phoneApplicationPage);
            //Completed is an event
            transition.Completed += delegate
            {
                transition.Stop();
            };

            transition.Begin();