import {render, RenderPosition} from '../render.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import EventsItemView from '../view/trip-events-item-view.js';

const tripEventsSectionElement = document.querySelector('.trip-events');
const tripEventsListElement = new TripEventsListView();
const renderCount = 3;

export default class TripEventsList {
  init() {
    render(tripEventsListElement, tripEventsSectionElement, RenderPosition.BEFOREEND);
    for (let i = 0; i < renderCount; i++) {
      render(new EventsItemView(), tripEventsListElement.getElement());
    }
  }
}
