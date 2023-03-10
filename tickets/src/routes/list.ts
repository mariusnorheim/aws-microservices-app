import { Router, Request, Response } from 'express';
// import { Ticket } from '../models/ticket';
// import { NotFoundError } from '@tick-it/common';

const listTicketRouter = Router();

listTicketRouter.get(
  '/api/tickets/:id',
  async (req: Request, res: Response) => {
    const foundTicket = await Ticket.findById(req.params.id);

    if (!foundTicket) {
      throw new NotFoundError();
    }
    res.send(foundTicket);
  }
);

export { listTicketRouter };